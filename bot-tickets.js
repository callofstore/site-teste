// ============================================
// BOT UNIFICADO - CALL OF STORE (VERSÃO CORRIGIDA + MELHORIAS)
// - Webhook protegido por segredo
// - Pedido do site já cria um canal (ticket) automaticamente
// - Persistência em pedidosAtivos.json (não perde ao reiniciar)
// - !pago somente admins + reaproveita canal existente
// - Busca do cliente no Discord sem "fetch geral" gigante
// ============================================

require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const {
  Client, GatewayIntentBits, EmbedBuilder,
  ActionRowBuilder, ButtonBuilder, ButtonStyle,
  ChannelType, PermissionsBitField, MessageFlags,
  Partials,
  ModalBuilder, TextInputBuilder, TextInputStyle
} = require('discord.js');
const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURAÇÕES
// ============================================

const app = express();
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-webhook-secret, x-signature, x-request-id');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));
app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

const TOKEN = process.env.DISCORD_TOKEN;
const PORT = process.env.PORT || 3000;

// ⚠️ Coloque isso no .env em produção (WEBHOOK_SECRET=...)
// (mantive fallback para não quebrar seu bot agora)
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'callofstore_secret_2026';

// Mercado Pago
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL; // precisa ser https público
const MP_WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET;

// Configurações do servidor
const CONFIG = {
  guildId: '1435850106296340552',
  categoriaPendentesId: '1473337767013646581',
  categoriaFinalizadosId: '1473364496138637402',
  categoriaTicketsId: '1473393807037825238',
  canalPedidosThreadParentId: '1473393807037825238',
  // Logs (se o ID apontar para uma categoria, o bot tenta achar 1 canal de texto dentro dela)
  canalPedidosLogId: '1473393807037825238',
  canalFinalizadosLogId: '1473364496138637402',
  canalComprasId: '1471373796270407805',
  canalSuporteId: '1455351018316497100',
  admins: ['847590693404409967', '850215350343434270'],
  emailPix: 'callofstoreoficial@gmail.com',
  site: process.env.PUBLIC_STORE_URL || process.env.PUBLIC_BASE_URL || `http://localhost:${PORT}/`
};

async function resolveCategoriaId(guild, categoriaId) {
  if (!categoriaId) return null;
  const parent = await guild.channels.fetch(categoriaId).catch(() => null);
  if (!parent) return null;
  return parent.type === ChannelType.GuildCategory ? categoriaId : null;
}

// Resolve um canal de texto para envio de logs.
// - Se channelId for um canal de texto: retorna ele.
// - Se channelId for uma CATEGORIA: tenta achar 1 canal de texto dentro dela.


// ============================================
// THREADS: resolve canal base para criar threads (aceita canal de texto ou categoria)
// ============================================
async function resolveTextChannelForThreads(guild, id) {
  if (!id) return null;
  const ch = await guild.channels.fetch(id).catch(() => null);
  if (!ch) return null;

  // Se for um canal de texto, ótimo
  if (ch.type === ChannelType.GuildText) return ch;

  // Se for categoria, pega o primeiro canal de texto dentro dela
  if (ch.type === ChannelType.GuildCategory) {
    const child = guild.channels.cache.find(c => c.parentId === ch.id && c.type === ChannelType.GuildText);
    if (!child) return null;
    return await guild.channels.fetch(child.id).catch(() => null);
  }

  return null;
}

async function findActiveThreadByName(parentTextChannel, threadName) {
  const active = await parentTextChannel.threads.fetchActive().catch(() => null);
  if (!active) return null;
  const found = active.threads.find(t => (t.name || '').toLowerCase() === String(threadName).toLowerCase());
  return found || null;
}

async function resolveLogTextChannel(guild, channelId) {
  if (!channelId) return null;
  const ch = await guild.channels.fetch(channelId).catch(() => null);
  if (!ch) return null;

  // Se for categoria, procurar algum canal de texto filho
  if (ch.type === ChannelType.GuildCategory) {
    const all = await guild.channels.fetch().catch(() => null);
    if (!all) return null;
    const child = all.find(c => c?.parentId === ch.id && c.type === ChannelType.GuildText);
    return child || null;
  }

  if (typeof ch.isTextBased === 'function' && ch.isTextBased()) return ch;
  if (ch.type === ChannelType.GuildText) return ch;
  return null;
}

// ============================================
// INICIALIZAÇÃO DO BOT
// ============================================

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ],
  partials: [Partials.Channel]
});

// Mapas para armazenar dados
const pedidos = new Map();          // Pedidos dos tickets (sistema Discord)
const ticketsAbertos = new Map();   // Tickets abertos
const pedidosAtivos = new Map();    // Pedidos do site
let nextPedidoId = 1;

// Persistência (site)
const PEDIDOS_FILE = path.join(__dirname, 'pedidosAtivos.json');

function carregarPedidosAtivos() {
  if (!fs.existsSync(PEDIDOS_FILE)) return;
  try {
    const raw = fs.readFileSync(PEDIDOS_FILE, 'utf-8');
    const json = JSON.parse(raw || '{}');
    for (const [id, entry] of Object.entries(json)) {
      // Suporta seu formato antigo também
      const pedido = entry.pedido || entry.dados || entry.pedidoData || entry.pedido || null;
      if (!pedido) continue;

      pedidosAtivos.set(id.toString(), {
        pedidoId: Number(id),
        pedido,
        // status antigo: "aguardando_pagamento" agora significa "aguardando comprovante"
        status: (entry.status === 'aguardando_pagamento') ? 'aguardando_comprovante' : (entry.status || 'aguardando_comprovante'),
        createdAt: entry.createdAt || entry.criadoEm || Date.now(),
        canalId: entry.canalId || null,
        mp: entry.mp || null,

        // comprador (Discord real) - preenchido quando ele manda o comprovante por DM
        compradorId: entry.compradorId || null,

        // comprovante enviado pelo comprador (Discord)
        comprovante: entry.comprovante || null,

        // key entregue pelo admin
        key: entry.key || null,

        ticketLiberado: Boolean(entry.ticketLiberado),
        acaoEnviarPostada: Boolean(entry.acaoEnviarPostada)
      });
    }
    console.log(`📦 pedidosAtivos carregados: ${pedidosAtivos.size}`);
  } catch (e) {
    console.error('❌ Erro ao carregar pedidosAtivos.json:', e);
  }
}

function salvarPedidosAtivos() {
  try {
    const out = {};
    for (const [id, v] of pedidosAtivos.entries()) {
      out[id] = {
        status: v.status,
        pedido: v.pedido,
        createdAt: v.createdAt,
        canalId: v.canalId || null,
        mp: v.mp || null,
        compradorId: v.compradorId || null,
        comprovante: v.comprovante || null,
        key: v.key || null,
        ticketLiberado: Boolean(v.ticketLiberado),
        acaoEnviarPostada: Boolean(v.acaoEnviarPostada)
      };
    }
    fs.writeFileSync(PEDIDOS_FILE, JSON.stringify(out, null, 2), 'utf-8');
  } catch (e) {
    console.error('❌ Erro ao salvar pedidosAtivos.json:', e);
  }
}

carregarPedidosAtivos();

// ✅ Pedido do usuário: NÃO exibir QR Code no Discord.
// O QR/"copia e cola" do PIX continua indo para o SITE via /api/checkout/pix.

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

// (Removido) gerarQRCodePix
// - QR no Discord foi removido.
// - QR do Mercado Pago fica apenas no site (front) e no painel do MP.

function adminOnly(messageOrInteractionUserId) {
  return CONFIG.admins.includes(messageOrInteractionUserId);
}

async function resolverMembroDiscord(guild, discordUser) {
  if (!discordUser) return null;

  // tenta pegar ID direto (caso venha <@123> ou só número)
  const idMatch = discordUser.match(/\d{17,20}/);
  if (idMatch) {
    const m = await guild.members.fetch(idMatch[0]).catch(() => null);
    if (m) return m;
  }

  // pesquisa por username/nick (sem puxar todos os membros)
  const query = discordUser.toLowerCase().trim();

  // guild.members.search existe no discord.js v14
  const mgr = guild.members;
  let found = null;
  if (typeof mgr.search === 'function') {
    found = await mgr.search({ query, limit: 10 }).catch(() => null);
  } else {
    // fallback (fetch por query/limit)
    found = await mgr.fetch({ query, limit: 10 }).catch(() => null);
  }
  if (!found) return null;

  // melhor match: username exato, depois displayName exato, depois primeiro da lista
  const exactUser = found.find(m => (m.user.username || '').toLowerCase() === query);
  if (exactUser) return exactUser;

  const exactNick = found.find(m => (m.displayName || '').toLowerCase() === query);
  if (exactNick) return exactNick;

  return found.first() || null;
}

async function obterCanalPorNome(guild, nome) {
  const channels = await guild.channels.fetch().catch(() => null);
  if (!channels) return null;
  return channels.find(c => c?.name === nome) || null;
}

// ============================================
// MERCADO PAGO (PIX + WEBHOOK)
// ============================================

function idempotencyKey() {
  return (typeof crypto.randomUUID === 'function')
    ? crypto.randomUUID()
    : crypto.randomBytes(16).toString('hex');
}

async function mpRequest(method, pathUrl, body, extraHeaders = {}) {
  if (!MP_ACCESS_TOKEN) throw new Error('MP_ACCESS_TOKEN não configurado no .env');

  const url = `https://api.mercadopago.com${pathUrl}`;
  const resp = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      ...extraHeaders
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const text = await resp.text();
  let json;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text }; }
  if (!resp.ok) {
    const msg = json?.message || json?.error || `HTTP ${resp.status}`;
    throw new Error(`Mercado Pago: ${msg}`);
  }
  return json;
}

async function criarPagamentoPixMP({ pedidoId, total, email, description }) {
  if (!PUBLIC_BASE_URL) throw new Error('PUBLIC_BASE_URL não configurado no .env');

  const notificationUrl = `${PUBLIC_BASE_URL.replace(/\/$/, '')}/webhooks/mercadopago`;

  // Docs: Pix via POST /v1/payments (payment_method_id=pix)
  // O retorno costuma trazer qr_code e qr_code_base64 em point_of_interaction.transaction_data
  const payload = {
    transaction_amount: Number(total),
    description: description || `Pedido #${pedidoId} - Call of Store`,
    payment_method_id: 'pix',
    payer: { email },
    external_reference: String(pedidoId),
    notification_url: notificationUrl,
    metadata: { pedido_id: String(pedidoId) }
  };

  return mpRequest('POST', '/v1/payments', payload, {
    'X-Idempotency-Key': idempotencyKey()
  });
}

async function obterPagamentoMP(paymentId) {
  return mpRequest('GET', `/v1/payments/${paymentId}`);
}

function validarAssinaturaMercadoPago({ signature, requestId, dataId }) {
  // Mercado Pago usa x-signature + x-request-id para validar a autenticidade.
  // Exemplo de manifest/hmac: `id:${id};request-id:${requestId};ts:${ts};` (sha256)
  // Fonte: discussão oficial do SDK (exemplo de implementação)
  if (!MP_WEBHOOK_SECRET) {
    // Se você não setou o segredo, não tem como validar. (Recomendado setar.)
    return true;
  }
  if (!signature || !requestId || !dataId) return false;

  const parts = String(signature).split(',');
  let ts = null;
  let hash = null;
  for (const part of parts) {
    const [k, v] = part.split('=');
    if (!k || !v) continue;
    const key = k.trim();
    const val = v.trim();
    if (key === 'ts') ts = val;
    if (key === 'v1') hash = val;
  }
  if (!ts || !hash) return false;

  const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`;
  const expected = crypto
    .createHmac('sha256', MP_WEBHOOK_SECRET)
    .update(manifest)
    .digest('hex');

  return expected === hash;
}

async function postarInfoPagamentoNoCanal(canal, mpPayment) {
  // ⚠️ Sem QR/"copia e cola" no Discord (pedido do usuário)
  if (!canal || !mpPayment) return;

  const pedidoId = mpPayment?.external_reference || mpPayment?.metadata?.pedido_id || 'ID';

  const embed = new EmbedBuilder()
    .setTitle('💚 PIX (Mercado Pago) criado')
    .setColor(0x00C853)
    .setDescription(
`O QR Code foi exibido **apenas no site** para o comprador.

✅ **Após pagar, o comprador deve enviar o comprovante no Discord (DM para o bot):**
\`!comprovante ${pedidoId}\` + anexo`
    )
    .addFields(
      { name: '🧾 Payment ID', value: String(mpPayment.id || 'n/a'), inline: true },
      { name: '📌 Status', value: String(mpPayment.status || 'n/a'), inline: true },
      { name: '🔗 Referência', value: String(mpPayment.external_reference || 'n/a'), inline: true }
    )
    .setTimestamp();

  await canal.send({ embeds: [embed] });
}


// ============================================
// CANAL (TICKET) AUTOMÁTICO PARA PEDIDO DO SITE
// ============================================

async function criarOuObterCanalPedidoSite(guild, pedido) {
  const pedidoId = pedido.pedidoId;
  const threadName = `pedido-${pedidoId}`.toLowerCase();

  // Canal base onde os pedidos devem ficar (um único canal -> threads)
  const parentTextChannel =
    (await resolveTextChannelForThreads(guild, CONFIG.canalPedidosThreadParentId)) ||
    (await resolveTextChannelForThreads(guild, CONFIG.canalPedidosLogId)) ||
    (await resolveTextChannelForThreads(guild, CONFIG.categoriaTicketsId));

  if (!parentTextChannel) {
    throw new Error('Não encontrei um canal de texto para criar as threads de pedidos. Confira o ID 1473393807037825238 (precisa ser CANAL de TEXTO, ou uma CATEGORIA que tenha um canal de texto dentro).');
  }

  // Se já salvamos o ID do ticket (thread), tenta reutilizar
  if (pedido.ticketThreadId) {
    const existente = await guild.channels.fetch(pedido.ticketThreadId).catch(() => null);
    if (existente && existente.isThread()) {
      return { canal: existente, existente: true };
    }
  }

  // Procura thread ativa pelo nome (evita duplicar)
  const activeFound = await findActiveThreadByName(parentTextChannel, threadName);
  if (activeFound) {
    return { canal: activeFound, existente: true };
  }

  // Cria thread (preferencialmente privada para ficar só ADM)
  let thread = null;
  try {
    thread = await parentTextChannel.threads.create({
      name: threadName,
      autoArchiveDuration: 10080, // 7 dias
      type: ChannelType.PrivateThread,
      invitable: false,
      reason: `Pedido #${pedidoId}`
    });
  } catch (e) {
    // fallback: thread pública (se o servidor/canal não permitir privada)
    thread = await parentTextChannel.threads.create({
      name: threadName,
      autoArchiveDuration: 10080,
      type: ChannelType.PublicThread,
      reason: `Pedido #${pedidoId}`
    });
  }

  // Garante que os admins participem da thread (principalmente se for PrivateThread)
  for (const adminId of CONFIG.admins) {
    await thread.members.add(adminId).catch(() => {});
  }

  // salva referência no objeto (quem chama salva em pedidosAtivos.json)
  pedido.ticketThreadId = thread.id;

  return { canal: thread, existente: false };
}


async function enviarMensagemAguardandoPagamentoSite(canal, pedido) {
  // (mantive o nome da função para não quebrar chamadas existentes)
  const { pedidoId, cliente, jogos, total, discordUser, email } = pedido;

  let listaJogos = '';
  (jogos || []).forEach((item, index) => {
    listaJogos += `${index + 1}. **${item.quantidade}x ${item.nome}** - R$ ${(item.preco * item.quantidade).toFixed(2)}
`;
  });

  const embed = new EmbedBuilder()
    .setTitle(`🧾 **PEDIDO #${pedidoId}**`)
    .setColor(0xFF8C00)
    .setDescription(
`🟠 **Aguardando comprovante (Discord)**

🔒 *Ticket interno (somente equipe).*

✅ O comprador paga no site e **depois envia o comprovante por DM para o bot**:
\`!comprovante ${pedidoId}\` + anexo`
    )
    .addFields(
      { name: '👤 **CLIENTE (Site)**', value: `**Nome:** ${cliente?.nome || 'n/a'}
**Discord:** ${discordUser || cliente?.discord || 'n/a'}
**Email:** ${email || 'Não informado'}`, inline: false },
      { name: '🎮 **JOGOS**', value: listaJogos || 'Nenhum', inline: false },
      { name: '💰 **TOTAL**', value: `R$ ${(total ?? 0).toFixed(2)}`, inline: true },
      { name: '📌 **STATUS**', value: '🟠 Aguardando comprovante', inline: true }
    )
    .setFooter({ text: 'Quando o comprovante chegar, a equipe aprova e libera a entrega.' })
    .setTimestamp();

  await canal.send({ embeds: [embed] });
}


// ============================================
// LIBERAR/ENVIAR TICKET PARA O COMPRADOR (APÓS PAGAMENTO)
// ============================================

function rowEnviarTicketAoComprador(pedidoId) {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`enviar_ticket_${pedidoId}`)
      .setLabel('📩 Enviar ticket ao comprador')
      .setStyle(ButtonStyle.Primary)
  );
}

async function postarAcaoEnviarTicketAoComprador(canal, pedido) {
  if (!canal || !pedido) return;
  const pedidoId = pedido.pedidoId;

  const embed = new EmbedBuilder()
    .setTitle('📩 Ação do admin: enviar ticket ao comprador')
    .setColor(0x2F80ED)
    .setDescription(
      `Pagamento aprovado para o **Pedido #${pedidoId}**.\n` +
      `Clique no botão abaixo para **liberar o acesso do comprador** a este canal e enviar o link por DM.\n\n` +
      `Comprador (do site): **${pedido.discordUser || pedido?.cliente?.discord || 'n/a'}**`
    )
    .setTimestamp();

  await canal.send({ embeds: [embed], components: [rowEnviarTicketAoComprador(pedidoId)] });
}

async function liberarTicketParaComprador({ guild, canal, pedidoId, comprador }) {
  // comprador: string (mention/id/nick) ou GuildMember
  const pedidoData = pedidosAtivos.get(String(pedidoId));
  if (!pedidoData) throw new Error(`Pedido #${pedidoId} não encontrado`);

  let membro = null;
  if (comprador && typeof comprador === 'object' && comprador.id) {
    membro = comprador;
  } else {
    const alvo = String(comprador || '').trim();
    if (!alvo) throw new Error('Comprador não informado.');
    membro = await resolverMembroDiscord(guild, alvo);
  }

  if (!membro) {
    throw new Error('Não achei o comprador no servidor. Envie o @ do usuário ou o ID correto.');
  }

  // libera acesso no ticket
  if (canal.isThread && canal.isThread()) {
    // ticket em thread: adiciona o comprador como membro
    await canal.members.add(membro.id).catch((e) => {
      console.error('❌ Falha ao adicionar membro na thread:', e);
      throw new Error('Falha ao adicionar o comprador na thread (verifique permissões do bot: Manage Threads / Create Private Threads).');
    });
  } else {
    // ticket em canal: libera via permissão
    await canal.permissionOverwrites.edit(membro.id, {
      ViewChannel: true,
      SendMessages: true,
      ReadMessageHistory: true
    }).catch((e) => {
      console.error('❌ Falha ao liberar permissão no canal:', e);
      throw new Error('Falha ao liberar permissão no canal (verifique permissões do bot).');
    });
  }

  // persistência
  pedidoData.compradorId = membro.id;
  pedidoData.ticketLiberado = true;
  salvarPedidosAtivos();

  // avisa no canal
  await canal.send(`✅ Ticket liberado para ${membro} (Pedido #${pedidoId}).`);

  // DM pro comprador (se possível)
  try {
    const embedDM = new EmbedBuilder()
      .setTitle('✅ Seu ticket foi liberado')
      .setColor(0x00C853)
      .setDescription(
        `Seu pagamento do **Pedido #${pedidoId}** foi confirmado.\n` +
        `Acesse o ticket para acompanhar a entrega: ${canal}`
      )
      .setTimestamp();
    await membro.send({ embeds: [embedDM] });
  } catch (e) {
    // DMs podem estar fechadas; não quebra o fluxo
    console.warn('⚠️ Não consegui enviar DM ao comprador (DM fechada ou bloqueada).');
  }

  return membro;
}

// ============================================
// WEBHOOK PARA RECEBER PEDIDOS DO SITE
// ============================================

app.post('/webhook/pedido', async (req, res) => {
  console.log('\n📦 Webhook recebido do site!');

  // 🔒 Proteção por segredo
  const secret = req.headers['x-webhook-secret'];
  if (!secret || secret !== WEBHOOK_SECRET) {
    return res.status(401).json({ sucesso: false, erro: 'Webhook não autorizado' });
  }

  try {
    const pedido = req.body;

    if (!pedido?.pedidoId || !pedido?.cliente || !pedido?.jogos) {
      return res.status(400).json({ sucesso: false, erro: 'Dados incompletos' });
    }

    const resultado = await processarPedidoSite(pedido);

    if (resultado.sucesso) {
      res.json({ sucesso: true, mensagem: resultado.mensagem });
    } else {
      res.status(500).json({ sucesso: false, erro: resultado.erro });
    }
  } catch (error) {
    console.error('❌ Erro no webhook:', error);
    res.status(500).json({ sucesso: false, erro: error.message });
  }
});

// ============================================
// CHECKOUT DO SITE (PIX MERCADO PAGO)
// - O site chama este endpoint diretamente.
// - Aqui a gente:
//   1) gera um pedidoId
//   2) registra o pedido + cria ticket (canal) no Discord
//   3) cria pagamento PIX no Mercado Pago
//   4) devolve QR/"copia e cola" pro site
// ============================================

function gerarPedidoIdSite() {
  // número relativamente curto e único (bom pra usar no nome do canal)
  // exemplo: 8 dígitos do timestamp + 2 dígitos aleatórios
  let id;
  do {
    const base = Date.now().toString().slice(-8);
    const rnd = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    id = Number(`${base}${rnd}`);
  } while (pedidosAtivos.has(String(id)));
  return id;
}

app.post('/api/checkout/pix', async (req, res) => {
  try {
    const { cliente, discordUser, email, jogos, total } = req.body || {};

    if (!cliente?.nome || !discordUser || !Array.isArray(jogos) || jogos.length === 0) {
      return res.status(400).json({ sucesso: false, erro: 'Dados incompletos (nome/discord/jogos).' });
    }
    if (!email) {
      return res.status(400).json({ sucesso: false, erro: 'Email é obrigatório para pagamento via Mercado Pago.' });
    }
    const totalNum = Number(total);
    if (!Number.isFinite(totalNum) || totalNum <= 0) {
      return res.status(400).json({ sucesso: false, erro: 'Total inválido.' });
    }

    const pedidoId = gerarPedidoIdSite();

    const pedido = {
      pedidoId,
      cliente,
      jogos,
      total: totalNum,
      discordUser,
      email
    };

    // 1) cria o ticket no Discord + salva
    const resultado = await processarPedidoSite(pedido);
    if (!resultado?.sucesso) {
      return res.status(500).json({ sucesso: false, erro: resultado?.erro || 'Falha ao registrar pedido.' });
    }

    // 2) cria pagamento Pix no MP
    const mpPayment = await criarPagamentoPixMP({
      pedidoId,
      total: totalNum,
      email,
      description: `Pedido #${pedidoId} - Call of Store`
    });

    // 3) guarda no pedidoAtivo
    const pedidoData = pedidosAtivos.get(String(pedidoId));
    if (pedidoData) {
      pedidoData.mp = { paymentId: mpPayment?.id, status: mpPayment?.status };
      salvarPedidosAtivos();
    }

    // 4) posta infos do pagamento no Discord (SEM QR)
    if (pedidoData?.canalId) {
      const guild = await client.guilds.fetch(CONFIG.guildId);
      const canal = await guild.channels.fetch(pedidoData.canalId).catch(() => null);
      if (canal) await postarInfoPagamentoNoCanal(canal, mpPayment);
    }

    const tx = mpPayment?.point_of_interaction?.transaction_data;
    return res.json({
      sucesso: true,
      pedidoId,
      paymentId: mpPayment?.id,
      status: mpPayment?.status,
      qr_code: tx?.qr_code || null,
      qr_code_base64: tx?.qr_code_base64 || null
    });
  } catch (e) {
    console.error('❌ Erro /api/checkout/pix:', e);
    return res.status(500).json({ sucesso: false, erro: e.message || 'Erro interno.' });
  }
});

// ============================================
// WEBHOOK DO MERCADO PAGO
// Configure no painel do MP com a URL:
//   {PUBLIC_BASE_URL}/webhooks/mercadopago
// Eventos: Payments (ou Payment updates)
// ============================================

app.post('/webhooks/mercadopago', async (req, res) => {
  // MP reenvia se demorar ou der erro; responda rápido.
  // Mesmo respondendo rápido, a gente processa em seguida.
  try {
    const signature = req.headers['x-signature'];
    const requestId = req.headers['x-request-id'];

    // o MP pode mandar data.id via query ou body
    const dataId =
      req.query?.id ||
      req.query?.['data.id'] ||
      req.body?.data?.id ||
      req.body?.id;

    if (!dataId) return res.sendStatus(200);

    const ok = validarAssinaturaMercadoPago({ signature, requestId, dataId: String(dataId) });
    if (!ok) return res.sendStatus(401);

    const payment = await obterPagamentoMP(String(dataId));
    const pedidoId = payment?.external_reference || payment?.metadata?.pedido_id;

    if (!pedidoId) return res.sendStatus(200);

    // Atualiza persistência
    const pedidoData = pedidosAtivos.get(String(pedidoId));
    if (pedidoData) {
      pedidoData.mp = {
        ...(pedidoData.mp || {}),
        paymentId: payment?.id,
        status: payment?.status
      };
      salvarPedidosAtivos();
    }

    // Ações por status
    if (payment?.status === 'approved') {
      // ⚠️ Fluxo manual: NÃO libera entrega automaticamente pelo webhook.
      // O comprador precisa enviar comprovante em DM para o bot e um admin aprova.
      const canalInfo = pedidoData?.canalId ? await client.channels.fetch(pedidoData.canalId).catch(() => null) : null;
      if (canalInfo) {
        const embedInfo = new EmbedBuilder()
          .setTitle('✅ Mercado Pago: pagamento aprovado (informativo)')
          .setColor(0x00C853)
          .setDescription(
            `Pedido #${pedidoId} foi marcado como **approved** no Mercado Pago.\n\n` +
            `⚠️ **Ainda aguardando comprovante no Discord** para aprovação manual.`
          )
          .addFields(
            { name: '🧾 Payment ID', value: String(payment?.id || 'n/a'), inline: true },
            { name: '📌 Status MP', value: String(payment?.status || 'n/a'), inline: true }
          )
          .setTimestamp();
        await canalInfo.send({ embeds: [embedInfo] }).catch(() => {});
      }
    } else if (payment?.status && ['rejected', 'cancelled', 'refunded', 'charged_back'].includes(payment.status)) {
      // avisa no canal do pedido (se existir)
      if (pedidoData?.canalId) {
        const guild = await client.guilds.fetch(CONFIG.guildId);
        const canal = await guild.channels.fetch(pedidoData.canalId).catch(() => null);
        if (canal) {
          const emb = new EmbedBuilder()
            .setTitle('⚠️ Atualização de pagamento (Mercado Pago)')
            .setColor(0xFF5252)
            .setDescription(`Status: **${payment.status}**`)
            .addFields({ name: '🧾 Payment ID', value: String(payment.id || 'n/a'), inline: true })
            .setTimestamp();
          await canal.send({ embeds: [emb] });
        }
      }
    }

    return res.sendStatus(200);
  } catch (e) {
    console.error('❌ Erro no webhook MP:', e);
    return res.sendStatus(200);
  }
});

// ============================================
// PROCESSAR PEDIDO DO SITE (agora cria canal automático)
// ============================================

async function processarPedidoSite(pedido) {
  try {
    const guild = await client.guilds.fetch(CONFIG.guildId);
    const { pedidoId, total } = pedido;

    console.log(`📦 Pedido #${pedidoId} recebido - AGUARDANDO COMPROVANTE (Discord)`);

    // Salvar/atualizar no Map
    pedidosAtivos.set(pedidoId.toString(), {
      pedidoId,
      pedido,
      status: 'aguardando_comprovante',
      createdAt: Date.now(),
      canalId: null,
      mp: null,
      compradorId: null,
      comprovante: null,
      key: null,
      ticketLiberado: false,
      acaoEnviarPostada: false
    });
    salvarPedidosAtivos();

    // ✅ Criar (ou pegar) canal do pedido imediatamente
    const { canal, existente } = await criarOuObterCanalPedidoSite(guild, pedido);

    const pedidoData = pedidosAtivos.get(pedidoId.toString());
    if (pedidoData) {
      pedidoData.canalId = canal.id;
      salvarPedidosAtivos();
    }

    if (!existente) {
      await enviarMensagemAguardandoPagamentoSite(canal, pedido);
    }

    // Enviar resumo para o canal de pedidos (log). Se o ID for categoria, pega 1 canal de texto dentro.
    const canalPedidosLog =
      (await resolveLogTextChannel(guild, CONFIG.canalPedidosLogId)) ||
      (await guild.channels.fetch(CONFIG.canalComprasId).catch(() => null));
    const adminMentions = CONFIG.admins.map(id => `<@${id}>`).join(' ');

    const embedResumo = new EmbedBuilder()
      .setTitle(`💰 **PEDIDO #${pedidoId}**`)
      .setColor(0xFFA500)
      .setDescription('🟡 **Aguardando pagamento**')
      .addFields(
        { name: '💰 **TOTAL**', value: `R$ ${(total ?? 0).toFixed(2)}`, inline: true },
        { name: '📌 **TICKET**', value: `${canal}`, inline: true }
      )
      .setTimestamp();

    if (canalPedidosLog) {
      await canalPedidosLog.send({
        content: `${adminMentions} - 📌 **Novo pedido do site!** Ticket: ${canal}`,
        embeds: [embedResumo]
      });
    }

    console.log(`✅ Pedido #${pedidoId} registrado + canal ${canal.name} criado/ok`);

    // 🔔 Tenta enviar DM pro comprador com instruções (pra "aparecer o bot na DM")
    // Funciona se o comprador estiver no servidor e permitir DMs de membros do servidor.
    try {
      const pedidoData2 = pedidosAtivos.get(String(pedidoId));
      const membroComprador = await resolverMembroDiscord(guild, pedido.discordUser);
      const userComprador = membroComprador?.user || null;

      if (userComprador) {
        await userComprador.send(
          `🧾 **Pedido #${pedidoId} criado!**

` +
          `Depois que você **pagar no site**, envie aqui o **comprovante** (imagem/PDF) com o comando:
` +
          `\`!comprovante ${pedidoId}\`

` +
          `📌 Dica: mande o comando e o anexo **na mesma mensagem**.`
        ).catch(() => { throw new Error('DM bloqueada pelo usuário'); });

        if (pedidoData2) {
          pedidoData2.dmInstrucao = { sentAt: Date.now(), toUserId: userComprador.id };
          salvarPedidosAtivos();
        }
      } else {
        // não encontrou o membro pelo texto informado
        await canal.send({
          content: `⚠️ Não consegui identificar o comprador \`${pedido.discordUser}\` no servidor para enviar DM com instruções.
` +
                   `Peça para ele abrir a DM do bot e enviar: \`!comprovante ${pedidoId}\` (com anexo).`
        }).catch(() => {});
      }
    } catch (err) {
      // se DM falhar (privacidade), avisa no ticket para o admin orientar o comprador
      await canal.send({
        content: `⚠️ Não consegui enviar DM de instruções para o comprador (provável DM fechada).
` +
                 `Oriente o comprador a abrir a DM do bot e enviar: \`!comprovante ${pedidoId}\` (com anexo).`
      }).catch(() => {});
    }

    return { sucesso: true, mensagem: 'Pedido registrado, ticket criado no Discord' };
  } catch (error) {
    console.error('❌ Erro ao processar pedido:', error);
    return { sucesso: false, erro: error.message };
  }
}

// ============================================
// COMANDO !pago (AGORA: SOMENTE ADMINS)
// ============================================

async function marcarPedidoComoPago(pedidoId, opts = {}) {
  const id = String(pedidoId);
  const pedidoData = pedidosAtivos.get(id);
  if (!pedidoData) throw new Error(`Pedido #${pedidoId} não encontrado`);

  const jaEstavaPago = (pedidoData.status === 'aguardando_entrega' || pedidoData.status === 'finalizado');

  const pedido = pedidoData.pedido;
  const guild = await client.guilds.fetch(CONFIG.guildId);

  // Se já tem canal, só usa ele. Se não tiver, cria.
  let canal = null;
  if (pedidoData.canalId) {
    canal = await guild.channels.fetch(pedidoData.canalId).catch(() => null);
  }
  if (!canal) {
    const created = await criarOuObterCanalPedidoSite(guild, pedido);
    canal = created.canal;
    pedidoData.canalId = canal.id;
  }

  // atualiza status (se ainda não estiver pago)
  if (!jaEstavaPago) {
    pedidoData.status = 'aguardando_entrega';
    salvarPedidosAtivos();
  }

  // ✅ Para ficar igual ao print: ao aprovar pagamento, manda direto o card do pedido (sem mensagem extra)
  if (!jaEstavaPago) {
    await enviarMensagemTicketSite(canal, pedido);
  }

  // ação para admin liberar/enviar ticket ao comprador (só depois do pagamento)
  if (!pedidoData.ticketLiberado && !pedidoData.acaoEnviarPostada) {
    await postarAcaoEnviarTicketAoComprador(canal, pedido);
    pedidoData.acaoEnviarPostada = true;
    salvarPedidosAtivos();
  }

  return { canal, jaEstavaPago };
}

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!pago')) return;

  if (!adminOnly(message.author.id)) {
    return message.reply('❌ Apenas administradores podem usar esse comando.');
  }

  const args = message.content.split(' ');
  const pedidoId = args[1];

  if (!pedidoId) {
    return message.reply('❌ Use: !pago [ID do pedido]');
  }

  const pedidoData = pedidosAtivos.get(pedidoId);
  if (!pedidoData) {
    return message.reply(`❌ Pedido #${pedidoId} não encontrado!`);
  }

  try {
    const { canal } = await marcarPedidoComoPago(pedidoId, { origem: 'manual' });
    await message.reply(`✅ **Pagamento confirmado!** Ticket: ${canal || 'ok'}`);

  } catch (error) {
    console.error('❌ Erro no !pago:', error);
    message.reply(`❌ Erro: ${error.message}`);
  }
});

// ============================================
// FUNÇÕES DO SISTEMA DE TICKETS ORIGINAL (Discord)
// ============================================

async function usuarioTemTicketAtivo(userId, guild) {
  for (const [canalId, pedidoId] of ticketsAbertos) {
    const pedido = pedidos.get(pedidoId);
    if (pedido && pedido.userId === userId) {
      const canalExistente = await guild.channels.fetch(canalId).catch(() => null);
      if (canalExistente) return canalExistente;
      ticketsAbertos.delete(canalId);
    }
  }
  return null;
}

async function criarCanalTicket(interaction) {
  try {
    const guild = interaction.guild;
    const userId = interaction.user.id;
    const username = interaction.user.username;

    const ticketExistente = await usuarioTemTicketAtivo(userId, guild);
    if (ticketExistente) return { canal: ticketExistente, existente: true };

    const categoria = await guild.channels.fetch(CONFIG.categoriaTicketsId).catch(() => null);
    if (!categoria) return { error: 'Categoria não configurada' };

    const nomeCanal = `ticket-${username}-${Date.now().toString().slice(-4)}`
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '');

    const permissionOverwrites = [
      { id: guild.roles.everyone.id, deny: [PermissionsBitField.Flags.ViewChannel] },
      {
        id: interaction.user.id,
        type: 1,
        allow: [
          PermissionsBitField.Flags.ViewChannel,
          PermissionsBitField.Flags.SendMessages,
          PermissionsBitField.Flags.ReadMessageHistory
        ]
      }
    ];

    for (const adminId of CONFIG.admins) {
      permissionOverwrites.push({
        id: adminId,
        type: 1,
        allow: [
          PermissionsBitField.Flags.ViewChannel,
          PermissionsBitField.Flags.SendMessages,
          PermissionsBitField.Flags.ManageChannels
        ]
      });
    }

    const canal = await guild.channels.create({
      name: nomeCanal,
      type: ChannelType.GuildText,
      parent: CONFIG.categoriaTicketsId,
      permissionOverwrites,
      topic: `Ticket de compra - ${username}`
    });

    return { canal, existente: false };
  } catch (error) {
    console.error('Erro:', error);
    return { error: error.message };
  }
}

async function criarMensagemFixa(canal) {
  try {
    if (!canal) return;

    // ⚠️ Se você usa pins importantes no canal de compras, remova essa parte.
    const mensagensFixadas = await canal.messages.fetchPinned().catch(() => new Map());
    for (const msg of mensagensFixadas.values()) {
      // apaga só mensagens do bot (pra não apagar pin dos outros)
      if (msg.author?.id === client.user.id) {
        await msg.unpin().catch(() => {});
        await msg.delete().catch(() => {});
      }
    }

    const embedFixo = new EmbedBuilder()
      .setTitle('🎮 **CALL OF STORE - OFICIAL**')
      .setDescription(`
**Bem-vindo à melhor loja de keys do Discord!**

🔥 **Mais de 100 jogos em promoção**
⚡ **Entrega em até 5 minutos**
💰 **Pagamento via PIX**
🌐 **Site oficial: ${CONFIG.site}**

**📌 COMO COMPRAR:**
Clique no botão **COMPRAR** abaixo para abrir um ticket
      `)
      .setColor(0x8A2BE2)
      .setFooter({ text: 'Call of Store © 2026' })
      .setTimestamp();

    const rowFixo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('abrir_ticket')
        .setLabel('COMPRAR')
        .setStyle(ButtonStyle.Success)
        .setEmoji('🛒')
    );

    const mensagem = await canal.send({ embeds: [embedFixo], components: [rowFixo] });
    await mensagem.pin();

  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

async function enviarMensagemTicket(canal, interaction, pedidoId) {
  try {
    const embed = new EmbedBuilder()
      .setTitle('🛒 **TICKET DE COMPRA ABERTO!**')
      .setDescription(`
Olá ${interaction.user}, seja bem-vindo(a) à **Call of Store**! 🎮

**📋 COMO FUNCIONA:**
1️⃣ **Digite** os nomes dos jogos que deseja
2️⃣ **Finalize** clicando no botão abaixo
3️⃣ **Pague** via PIX
4️⃣ **Receba** suas keys
      `)
      .setColor(0x4CAF50)
      .setFooter({ text: `Pedido #${pedidoId}` })
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`finalizar_ticket_${pedidoId}`)
        .setLabel('💰 FINALIZAR COMPRA')
        .setStyle(ButtonStyle.Success)
        .setEmoji('✅'),
      new ButtonBuilder()
        .setCustomId(`fechar_ticket_${pedidoId}`)
        .setLabel('❌ FECHAR TICKET')
        .setStyle(ButtonStyle.Danger)
    );

    const adminsMention = CONFIG.admins.map(id => `<@${id}>`).join(' ');
    await canal.send({ content: `${interaction.user} ${adminsMention}`, embeds: [embed], components: [row] });
    return true;
  } catch (error) {
    console.error('Erro:', error);
    return false;
  }
}

async function processarFinalizacaoCompra(interaction, pedidoId, canal) {
  const userId = interaction.user.id;
  const userTag = interaction.user.tag;

  const mensagens = await canal.messages.fetch({ limit: 50 });
  const mensagensUsuario = mensagens.filter(msg => msg.author.id === userId && !msg.content.startsWith('/') && msg.content.length > 0);

  if (mensagensUsuario.size === 0) {
    return await interaction.reply({
      content: '❌ Nenhum jogo identificado! Digite os nomes dos jogos primeiro.',
      flags: MessageFlags.Ephemeral
    });
  }

  const total = 100.00; // Valor de teste (substitua pela sua lógica)
  const pedido = pedidos.get(pedidoId);
  if (pedido) {
    pedido.valorTotal = total;
    pedido.status = 'aguardando_pagamento';
  }

  const embed = new EmbedBuilder()
    .setTitle('🛒 **FINALIZAR COMPRA**')
    .setDescription(`**Pedido #${pedidoId}**`)
    .addFields(
      { name: '👤 **COMPRADOR**', value: userTag, inline: true },
      { name: '💰 **VALOR TOTAL**', value: `R$ ${total.toFixed(2)}`, inline: true },
      { name: '💳 **MÉTODO**', value: '💚 PIX', inline: true }
    )
    .setColor(0xFFA500)
    .setTimestamp();

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`confirmar_pagamento_${pedidoId}`)
      .setLabel('💚 CONFIRMAR E PAGAR')
      .setStyle(ButtonStyle.Success)
      .setEmoji('💰'),
    new ButtonBuilder()
      .setCustomId(`cancelar_compra_${pedidoId}`)
      .setLabel('❌ CANCELAR')
      .setStyle(ButtonStyle.Danger)
  );

  await interaction.reply({ embeds: [embed], components: [row] });
}

// ============================================
// Enviar mensagem no ticket do site (pagamento confirmado)
// ============================================

async function enviarMensagemTicketSite(canal, pedido) {
  const { pedidoId, cliente, jogos, total, discordUser, email } = pedido;

  let listaJogos = '';
  (jogos || []).forEach((item, index) => {
    listaJogos += `${index + 1}. **${item.quantidade}x ${item.nome}** - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
  });

  // Layout inspirado no print do usuário
  const embed = new EmbedBuilder()
    .setTitle(`📦 **PEDIDO #${pedidoId}**`)
    .setColor(0xF1C40F) // barra lateral amarela
    .setDescription('🆕 **Pedido confirmado - Pagamento recebido!**')
    .addFields(
      { name: '👤 **CLIENTE**', value: `**Nome:** ${cliente?.nome || 'n/a'}\n**Discord:** ${discordUser || cliente?.discord || 'n/a'}\n**Email:** ${email || 'Não informado'}`, inline: false },
      { name: '🎮 **JOGOS**', value: listaJogos || 'Nenhum', inline: false },
      { name: '💰 **TOTAL**', value: `R$ ${(total ?? 0).toFixed(2)}`, inline: true },
      { name: '🔑 **STATUS**', value: '🟡 Aguardando entrega', inline: true }
    )
    .setFooter({ text: 'Use os botões abaixo para gerenciar' })
    .setTimestamp();

  // Botões iguais ao print (linha única com 3 ações)
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`entregar_key_${pedidoId}`)
      .setLabel('Entregar Key')
      .setStyle(ButtonStyle.Success)
      .setEmoji('🔑'),
    new ButtonBuilder()
      .setCustomId(`finalizar_pedido_${pedidoId}`)
      .setLabel('📦 Finalizar')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('✅'),
    new ButtonBuilder()
      .setCustomId(`cancelar_pedido_${pedidoId}`)
      .setLabel('Cancelar')
      .setStyle(ButtonStyle.Danger)
      .setEmoji('❌')
  );

  await canal.send({ embeds: [embed], components: [row] });

  const instrucoes = new EmbedBuilder()
    .setTitle('📋 **INSTRUÇÕES**')
    .setColor(0x4CAF50)
    .setDescription('Clique em **✅ Entregar Key** para registrar a key do pedido.');

  await canal.send({ embeds: [instrucoes] });
}


// ============================================
// COMPROVANTE (DISCORD) -> TICKET INTERNO DO PEDIDO (SITE)
// ============================================

function rowAprovacaoComprovante(pedidoId) {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`ver_comprovante_${pedidoId}`)
      .setLabel('👁️ Ver comprovante')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`aprovar_comprovante_${pedidoId}`)
      .setLabel('✅ Aprovar')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId(`rejeitar_comprovante_${pedidoId}`)
      .setLabel('❌ Rejeitar')
      .setStyle(ButtonStyle.Danger)
  );
}

async function postarComprovanteNoTicketSite(canal, pedido, comprovante, compradorUser) {
  if (!canal || !pedido || !comprovante) return;

  const { pedidoId, cliente, jogos, total, discordUser, email } = pedido;

  let listaJogos = '';
  (jogos || []).forEach((item, index) => {
    listaJogos += `${index + 1}. **${item.quantidade}x ${item.nome}** - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
  });

  const compradorTxt = compradorUser ? `${compradorUser} (${compradorUser.tag || compradorUser.username})` : 'n/a';

  const embed = new EmbedBuilder()
    .setTitle(`🧾 **COMPROVANTE RECEBIDO - PEDIDO #${pedidoId}**`)
    .setColor(0x2F80ED)
    .setDescription(
`📥 O comprador enviou um comprovante.

✅ **Regra:** clique em **Ver comprovante** (obrigatório) e depois **Aprovar** para liberar a entrega.`
    )
    .addFields(
      { name: '👤 **CLIENTE (Site)**', value: `**Nome:** ${cliente?.nome || 'n/a'}\n**Discord (site):** ${discordUser || cliente?.discord || 'n/a'}\n**Email:** ${email || 'Não informado'}`, inline: false },
      { name: '🧍 **COMPRADOR (Discord real)**', value: compradorTxt, inline: false },
      { name: '🎮 **JOGOS**', value: listaJogos || 'Nenhum', inline: false },
      { name: '💰 **TOTAL**', value: `R$ ${(total ?? 0).toFixed(2)}`, inline: true },
      { name: '📌 **STATUS**', value: '🟣 Comprovante enviado', inline: true }
    )
    .setImage(comprovante.url)
    .setTimestamp();

  await canal.send({ embeds: [embed], components: [rowAprovacaoComprovante(pedidoId)] });
}

// ============================================
// EVENTOS DO BOT
// ============================================

client.once('ready', async () => {
  console.log('\n' + '='.repeat(50));
  console.log(`✅ **BOT ONLINE!**`);
  console.log('='.repeat(50));
  console.log(`🤖 Nome: ${client.user.tag}`);
  console.log(`📊 Servidor ID: ${CONFIG.guildId}`);
  console.log(`👥 Admins: ${CONFIG.admins.length}`);
  console.log(`🌐 Webhook (site) local: http://localhost:${PORT}/webhook/pedido`);
  console.log(`🧾 Checkout PIX (site): http://localhost:${PORT}/api/checkout/pix`);
  if (PUBLIC_BASE_URL) {
    console.log(`🔔 Webhook Mercado Pago: ${PUBLIC_BASE_URL.replace(/\/$/, '')}/webhooks/mercadopago`);
  } else {
    console.log('🔔 Webhook Mercado Pago: (defina PUBLIC_BASE_URL no .env)');
  }
  console.log('='.repeat(50) + '\n');

  client.user.setActivity('🛒 Call of Store', { type: 3 });

  try {
    const canalCompras = await client.channels.fetch(CONFIG.canalComprasId).catch(() => null);
    if (canalCompras) {
      await criarMensagemFixa(canalCompras);
      console.log(`✅ Canal de compras configurado: ${canalCompras.name}`);
    }
  } catch (error) {
    console.error('❌ Erro ao acessar canal:', error);
  }
});

// ============================================
// INTERAÇÕES (BOTÕES)
// ============================================

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  try {
    const customId = interaction.customId;
    console.log(`🔘 Botão clicado: ${customId} por ${interaction.user.tag}`);

    // Botão: abrir ticket (Discord)
    if (customId === 'abrir_ticket') {
      await interaction.deferReply({ flags: MessageFlags.Ephemeral });

      const resultado = await criarCanalTicket(interaction);

      if (resultado.error) return interaction.editReply(`❌ Erro: ${resultado.error}`);
      if (resultado.existente) return interaction.editReply(`🔐 Você já possui um ticket: ${resultado.canal}`);

      const pedidoId = nextPedidoId++;

      pedidos.set(pedidoId, {
        id: pedidoId,
        usuario: interaction.user.tag,
        userId: interaction.user.id,
        canalId: resultado.canal.id,
        jogos: [],
        valorTotal: 0,
        status: 'ticket_aberto',
        data: new Date()
      });

      ticketsAbertos.set(resultado.canal.id, pedidoId);

      await enviarMensagemTicket(resultado.canal, interaction, pedidoId);

      await interaction.editReply(`✅ **Ticket criado!** Acesse: ${resultado.canal}`);
    }

    // Botão: finalizar ticket (Discord)
    if (customId.startsWith('finalizar_ticket_')) {
      const pedidoId = parseInt(customId.split('_')[2], 10);
      const pedido = pedidos.get(pedidoId);
      if (!pedido) return await interaction.reply({ content: '❌ Pedido não encontrado!', flags: MessageFlags.Ephemeral });

      await processarFinalizacaoCompra(interaction, pedidoId, interaction.channel);
    }

    // Botão: confirmar e pagar (Discord)
    if (customId.startsWith('confirmar_pagamento_')) {
      const pedidoId = parseInt(customId.split('_')[2], 10);
      const pedido = pedidos.get(pedidoId);

      if (!pedido) return await interaction.reply({ content: '❌ Pedido não encontrado!', flags: MessageFlags.Ephemeral });

      await interaction.deferReply({ flags: MessageFlags.Ephemeral });

      const embed = new EmbedBuilder()
        .setTitle('💚 **PAGAMENTO VIA PIX**')
        .setDescription(`
**Pedido #${pedidoId}**
**Valor: R$ ${(pedido.valorTotal || 100).toFixed(2)}**

📧 **Chave PIX:** \`${CONFIG.emailPix}\`
        `)
        .setColor(0x4CAF50);

      // ✅ Pedido do usuário: não mostrar QR code no Discord
      await interaction.editReply({ embeds: [embed] });

      pedido.status = 'pagamento_processando';
    }

    // cancelar
    if (customId.startsWith('cancelar_compra_') || customId.startsWith('cancelar_pedido_')) {
      // se for pedido do site, marca status e salva
      if (customId.startsWith('cancelar_pedido_')) {
        const pedidoId = customId.replace('cancelar_pedido_', '');
        const p = pedidosAtivos.get(pedidoId);
        if (p) {
          p.status = 'cancelado';
          salvarPedidosAtivos();
        }
      }
      await interaction.reply({ content: '❌ **Operação cancelada!**', flags: MessageFlags.Ephemeral });
    }

    // fechar ticket
    if (customId.startsWith('fechar_ticket_')) {
      await interaction.reply({ content: '🔒 Fechando ticket...', flags: MessageFlags.Ephemeral });
      setTimeout(async () => {
        try { await interaction.channel.delete(); } catch (error) { console.error('Erro ao deletar:', error); }
      }, 5000);
    }


    // Aprovação manual do comprovante (pedido do site)
    if (customId.startsWith('ver_comprovante_')) {
      const pedidoId = customId.replace('ver_comprovante_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      const pedidoData = pedidosAtivos.get(String(pedidoId));
      if (!pedidoData?.comprovante?.url) {
        return await interaction.reply({ content: '❌ Comprovante não encontrado para este pedido.', flags: MessageFlags.Ephemeral });
      }

      pedidoData.comprovante.viewedAt = Date.now();
      pedidoData.comprovante.viewedBy = interaction.user.id;
      salvarPedidosAtivos();

      return await interaction.reply({
        content: `👁️ **Link do comprovante:** ${pedidoData.comprovante.url}\n\nDepois clique em **✅ Aprovar** para liberar a entrega.`,
        flags: MessageFlags.Ephemeral
      });
    }

    if (customId.startsWith('aprovar_comprovante_')) {
      const pedidoId = customId.replace('aprovar_comprovante_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      const pedidoData = pedidosAtivos.get(String(pedidoId));
      if (!pedidoData?.comprovante?.url) {
        return await interaction.reply({ content: '❌ Nenhum comprovante anexado para este pedido.', flags: MessageFlags.Ephemeral });
      }

      if (pedidoData.comprovante.approvedAt) {
        return await interaction.reply({ content: '✅ Este comprovante já foi aprovado. A entrega já está liberada.', flags: MessageFlags.Ephemeral });
      }

      // regra: precisa clicar em "ver comprovante" antes
      if (!pedidoData.comprovante.viewedAt) {
        return await interaction.reply({
          content: '⚠️ Antes de aprovar, clique em **👁️ Ver comprovante** (regra do fluxo).',
          flags: MessageFlags.Ephemeral
        });
      }

      await interaction.deferReply({ flags: MessageFlags.Ephemeral });

      pedidoData.comprovante.approvedAt = Date.now();
      pedidoData.comprovante.approvedBy = interaction.user.id;
      pedidoData.status = 'aguardando_entrega'; // libera botões de entrega
      salvarPedidosAtivos();

      // remove botões da mensagem do comprovante (opcional)
      try { await interaction.message.edit({ components: [] }); } catch (e) {}

      // manda a mensagem estilo print (pagamento recebido + botões)
      await enviarMensagemTicketSite(interaction.channel, pedidoData.pedido);

      // posta botão de "enviar ticket ao comprador" (só depois de aprovado)
      if (!pedidoData.acaoEnviarPostada) {
        await postarAcaoEnviarTicketAoComprador(interaction.channel, pedidoData.pedido);
        pedidoData.acaoEnviarPostada = true;
        salvarPedidosAtivos();
      }

      return await interaction.editReply({ content: '✅ Comprovante aprovado! Entrega liberada.' });
    }

    if (customId.startsWith('rejeitar_comprovante_')) {
      const pedidoId = customId.replace('rejeitar_comprovante_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      const pedidoData = pedidosAtivos.get(String(pedidoId));
      if (!pedidoData?.comprovante?.url) {
        return await interaction.reply({ content: '❌ Nenhum comprovante anexado para este pedido.', flags: MessageFlags.Ephemeral });
      }

      const modal = new ModalBuilder()
        .setCustomId(`modal_rejeitar_comprovante_${pedidoId}`)
        .setTitle(`Rejeitar comprovante - Pedido #${pedidoId}`);

      const input = new TextInputBuilder()
        .setCustomId('motivo_input')
        .setLabel('Motivo da rejeição')
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
        .setMaxLength(500)
        .setPlaceholder('Ex: Comprovante ilegível / valor divergente / sem data, etc.');

      modal.addComponents(new ActionRowBuilder().addComponents(input));
      return await interaction.showModal(modal);
    }

    // Botões do sistema do site
    if (customId.startsWith('enviar_ticket_')) {
      const pedidoId = customId.replace('enviar_ticket_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      const pedidoData = pedidosAtivos.get(String(pedidoId));
      if (!pedidoData) {
        return await interaction.reply({ content: '❌ Pedido não encontrado!', flags: MessageFlags.Ephemeral });
      }

      // só libera depois de pago
      if (!['aguardando_entrega', 'finalizado'].includes(pedidoData.status)) {
        return await interaction.reply({
          content: '⚠️ Este pedido ainda não está com pagamento aprovado. O ticket só pode ser enviado após o pagamento.',
          flags: MessageFlags.Ephemeral
        });
      }

      if (pedidoData.ticketLiberado && pedidoData.compradorId) {
        return await interaction.reply({
          content: `✅ Ticket já foi liberado para <@${pedidoData.compradorId}>.`,
          flags: MessageFlags.Ephemeral
        });
      }

      const pedido = pedidoData.pedido;
      const sugestao = String(pedido?.discordUser || pedido?.cliente?.discord || '').trim();

      const modal = new ModalBuilder()
        .setCustomId(`modal_enviar_ticket_${pedidoId}`)
        .setTitle(`Enviar ticket - Pedido #${pedidoId}`);

      const input = new TextInputBuilder()
        .setCustomId('comprador_input')
        .setLabel('Discord do comprador (@, ID ou username)')
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setPlaceholder('@usuario ou 123456789012345678');

      if (sugestao) {
        // preenche com o valor vindo do site pra facilitar
        input.setValue(sugestao.slice(0, 100));
      }

      modal.addComponents(new ActionRowBuilder().addComponents(input));
      return await interaction.showModal(modal);
    }

    if (customId.startsWith('entregar_key_')) {
      const pedidoId = customId.replace('entregar_key_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      const pedidoData = pedidosAtivos.get(String(pedidoId));
      if (!pedidoData) {
        return await interaction.reply({ content: '❌ Pedido não encontrado!', flags: MessageFlags.Ephemeral });
      }
      if (pedidoData.status !== 'aguardando_entrega') {
        return await interaction.reply({ content: `⚠️ Este pedido está no status \`${pedidoData.status}\` e ainda não está liberado para entrega.`, flags: MessageFlags.Ephemeral });
      }

      const modal = new ModalBuilder()
        .setCustomId(`modal_key_${pedidoId}`)
        .setTitle(`🔑 Entregar Key - Pedido #${pedidoId}`);

      const input = new TextInputBuilder()
        .setCustomId('key_input')
        .setLabel('Cole a(s) key(s) do(s) jogo(s):')
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(2000)
        .setPlaceholder('EXEMPLO: ABCDE-12345-FGHIJ');

      modal.addComponents(new ActionRowBuilder().addComponents(input));
      return await interaction.showModal(modal);
    }

    if (customId.startsWith('finalizar_pedido_')) {
      const pedidoId = customId.replace('finalizar_pedido_', '');

      if (!adminOnly(interaction.user.id)) {
        return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
      }

      // Sempre responde rápido para não estourar o tempo da interação
      await interaction.deferReply({ flags: MessageFlags.Ephemeral });

      const p = pedidosAtivos.get(pedidoId);
      if (p) {
        p.status = 'finalizado';
        p.finalizadoAt = Date.now();
        p.finalizadoPor = interaction.user.id;
        salvarPedidosAtivos();
      }

      // finalizar (se for thread, arquiva/tranca; se for canal, move categoria)
      if (interaction.channel.isThread && interaction.channel.isThread()) {
        await interaction.channel.setLocked(true).catch(() => {});
        await interaction.channel.setArchived(true).catch(() => {});
      } else {
        const parentId = await resolveCategoriaId(interaction.guild, CONFIG.categoriaFinalizadosId);
        if (parentId) {
          await interaction.channel.setParent(parentId).catch(() => {});
        }
      }

      // Mensagem detalhada (pedido do usuário)
      const pedido = p?.pedido || null;
      const clienteNome = pedido?.cliente?.nome || 'n/a';
      const clienteDiscord = pedido?.discordUser || pedido?.cliente?.discord || 'n/a';
      const clienteEmail = pedido?.email || pedido?.cliente?.email || 'Não informado';
      const total = (pedido?.total ?? 0);

      const embed = new EmbedBuilder()
        .setTitle(`✅ **PEDIDO FINALIZADO - #${pedidoId}**`)
        .setColor(0x4CAF50)
        .setDescription('📦 Enviado com sucesso ✅')
        .addFields(
          { name: '👤 **CLIENTE**', value: `**Nome:** ${clienteNome}\n**Discord:** ${clienteDiscord}\n**Email:** ${clienteEmail}`, inline: false },
          { name: '💰 **TOTAL**', value: `R$ ${Number(total).toFixed(2)}`, inline: true },
          { name: '👑 **Finalizado por**', value: interaction.user.toString(), inline: true }
        )
        .setTimestamp();

      await interaction.channel.send({ embeds: [embed] });

      // Enviar também no canal de finalizados (log) solicitado
      const canalFinalizadosLog = await resolveLogTextChannel(interaction.guild, CONFIG.canalFinalizadosLogId);
      if (canalFinalizadosLog) {
        await canalFinalizadosLog.send({ embeds: [embed] }).catch(() => {});
      }

      // Remover botões
      try {
        const mensagens = await interaction.channel.messages.fetch({ limit: 10 });
        const msgBotoes = mensagens.find(m => m.components.length > 0);
        if (msgBotoes) await msgBotoes.edit({ components: [] });
      } catch (e) {}

      await interaction.editReply({ content: '✅ Pedido finalizado!' });
    }

  } catch (error) {
    console.error('❌ Erro na interação:', error);
    try {
      if (interaction.deferred) {
        await interaction.editReply({ content: '❌ Erro ao processar!' });
      } else if (!interaction.replied) {
        await interaction.reply({ content: '❌ Erro ao processar!', flags: MessageFlags.Ephemeral });
      }
    } catch (e) {}
  }
});

// ============================================
// MODAIS (RECEBER KEY E ENVIAR PARA O CLIENTE)
// ============================================

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  if (interaction.customId.startsWith('modal_key_')) {
    const pedidoId = interaction.customId.replace('modal_key_', '');
    const key = interaction.fields.getTextInputValue('key_input');

    const pedidoData = pedidosAtivos.get(pedidoId);

    if (!pedidoData) {
      return await interaction.reply({
        content: '❌ Pedido não encontrado!',
        flags: MessageFlags.Ephemeral
      });
    }

    const pedido = pedidoData.pedido;
    const discordUser = pedido.discordUser || pedido?.cliente?.discord;
    const nomeCliente = pedido?.cliente?.nome || 'Cliente';
    const jogos = pedido.jogos || [];

    const embedKey = new EmbedBuilder()
      .setTitle(`🔑 **KEY REGISTRADA - PEDIDO #${pedidoId}**`)
      .setColor(0x4CAF50)
      .setDescription('✅ **Key entregue com sucesso!**')
      .addFields(
        { name: '🔑 KEY DO JOGO', value: `\`\`\`${key}\`\`\``, inline: false },
        { name: '👤 Cliente Discord', value: discordUser || 'n/a', inline: true },
        { name: '👤 Entregue por', value: interaction.user.toString(), inline: true }
      )
      .setTimestamp();

    await interaction.channel.send({ embeds: [embedKey] });

    // Persistir entrega
    pedidoData.key = { value: key, deliveredAt: Date.now(), deliveredBy: interaction.user.id };
    pedidoData.status = 'key_enviada';
    salvarPedidosAtivos();

    // Enviar DM para o cliente (prioriza compradorId capturado no !comprovante)
    try {
      let dmUser = null;

      if (pedidoData.compradorId) {
        dmUser = await client.users.fetch(pedidoData.compradorId).catch(() => null);
      }

      // fallback: tenta resolver pelo texto do Discord informado no site
      let clienteMembro = null;
      if (!dmUser) {
        const guild = interaction.guild;
        clienteMembro = await resolverMembroDiscord(guild, discordUser);
        dmUser = clienteMembro?.user || null;
      }

      if (dmUser) {
        const embedCliente = new EmbedBuilder()
          .setTitle('🎮 **SUA KEY CHEGOU!**')
          .setColor(0x4CAF50)
          .setDescription(`Olá **${nomeCliente}**, seu pedido #${pedidoId} está pronto!`)
          .addFields(
            { name: '📦 **PEDIDO**', value: `#${pedidoId}`, inline: true },
            { name: '🎮 **JOGO(S)**', value: jogos.map(j => `${j.quantidade}x ${j.nome}`).join('\n') || 'n/a', inline: true },
            { name: '🔑 **SUA KEY**', value: `\`\`\`${key}\`\`\``, inline: false },
            { name: '📌 **INSTRUÇÕES**', value: `1. Abra a Steam
2. Vá em "Adicionar um jogo"
3. Escolha "Ativar um produto no Steam"
4. Cole a key acima
5. Pronto! O jogo estará na sua biblioteca`, inline: false }
          )
          .setFooter({ text: 'Call of Store [PT-BR] - Obrigado pela compra!' })
          .setTimestamp();

        await dmUser.send({ embeds: [embedCliente] });

        await interaction.followUp({
          content: `✅ **Key enviada por DM para ${dmUser.tag || dmUser.username}!**`,
          flags: MessageFlags.Ephemeral
        });

        console.log(`📨 DM enviada para ${dmUser.tag || dmUser.username}`);
      } else {
        await interaction.followUp({
          content: `⚠️ **Não foi possível enviar DM.** Cliente \`${discordUser}\` não encontrado e o comprador ainda não enviou comprovante por DM.`,
          flags: MessageFlags.Ephemeral
        });
      }
    } catch (dmError) {
      console.error('❌ Erro ao enviar DM:', dmError);
      await interaction.followUp({
        content: `⚠️ **Erro ao enviar DM.** O usuário pode ter DMs fechadas.`,
        flags: MessageFlags.Ephemeral
      });
    }

    // Remover botões
    try {
      const mensagens = await interaction.channel.messages.fetch({ limit: 10 });
      const msgBotoes = mensagens.find(m => m.components?.length > 0);
      if (msgBotoes) await msgBotoes.edit({ components: [] });
    } catch (e) {}

    await interaction.reply({
      content: `✅ **Key registrada!**`,
      flags: MessageFlags.Ephemeral
    });
  }


  if (interaction.customId.startsWith('modal_rejeitar_comprovante_')) {
    const pedidoId = interaction.customId.replace('modal_rejeitar_comprovante_', '');
    const motivo = interaction.fields.getTextInputValue('motivo_input');

    if (!adminOnly(interaction.user.id)) {
      return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
    }

    const pedidoData = pedidosAtivos.get(String(pedidoId));
    if (!pedidoData?.comprovante?.url) {
      return await interaction.reply({ content: '❌ Nenhum comprovante anexado para este pedido.', flags: MessageFlags.Ephemeral });
    }

    pedidoData.comprovante.rejectedAt = Date.now();
    pedidoData.comprovante.rejectedBy = interaction.user.id;
    pedidoData.comprovante.rejectReason = motivo;
    pedidoData.status = 'comprovante_rejeitado';
    salvarPedidosAtivos();

    // avisa no ticket interno
    const embed = new EmbedBuilder()
      .setTitle(`❌ Comprovante rejeitado - Pedido #${pedidoId}`)
      .setColor(0xE53935)
      .setDescription(`**Motivo:** ${motivo}\n\nO comprador pode reenviar com: \`!comprovante ${pedidoId}\` + anexo.`)
      .setTimestamp();

    await interaction.channel.send({ embeds: [embed] }).catch(() => {});

    // avisa o comprador por DM (se tivermos o ID)
    if (pedidoData.compradorId) {
      try {
        const user = await client.users.fetch(pedidoData.compradorId);
        await user.send(
          `❌ Seu comprovante do **Pedido #${pedidoId}** foi rejeitado.\n**Motivo:** ${motivo}\n\nEnvie novamente por DM: \`!comprovante ${pedidoId}\` (com a imagem anexada).`
        );
      } catch (e) {}
    }

    return await interaction.reply({ content: '✅ Rejeição registrada e comprador notificado (se possível).', flags: MessageFlags.Ephemeral });
  }

  if (interaction.customId.startsWith('modal_enviar_ticket_')) {
    const pedidoId = interaction.customId.replace('modal_enviar_ticket_', '');

    if (!adminOnly(interaction.user.id)) {
      return await interaction.reply({ content: '❌ Apenas administradores!', flags: MessageFlags.Ephemeral });
    }

    const pedidoData = pedidosAtivos.get(String(pedidoId));
    if (!pedidoData) {
      return await interaction.reply({ content: '❌ Pedido não encontrado!', flags: MessageFlags.Ephemeral });
    }

    // só libera depois de pago
    if (!['aguardando_entrega', 'finalizado'].includes(pedidoData.status)) {
      return await interaction.reply({
        content: '⚠️ Este pedido ainda não está com pagamento aprovado. O ticket só pode ser enviado após o pagamento.',
        flags: MessageFlags.Ephemeral
      });
    }

    if (pedidoData.ticketLiberado && pedidoData.compradorId) {
      return await interaction.reply({
        content: `✅ Ticket já foi liberado para <@${pedidoData.compradorId}>.`,
        flags: MessageFlags.Ephemeral
      });
    }

    const comprador = interaction.fields.getTextInputValue('comprador_input');
    const guild = interaction.guild;
    if (!guild) {
      return await interaction.reply({ content: '❌ Este comando precisa ser usado dentro do servidor.', flags: MessageFlags.Ephemeral });
    }

    const canal = await guild.channels.fetch(pedidoData.canalId).catch(() => null);
    if (!canal) {
      return await interaction.reply({ content: '❌ Canal do pedido não encontrado (talvez foi deletado).', flags: MessageFlags.Ephemeral });
    }

    try {
      const membro = await liberarTicketParaComprador({ guild, canal, pedidoId, comprador });

      // tenta remover o botão da mensagem anterior (se o modal veio de um clique em botão)
      try {
        const msgs = await canal.messages.fetch({ limit: 15 });
        const msgBtn = msgs.find(m => m.components?.some(r => r.components?.some(c => c.customId === `enviar_ticket_${pedidoId}`)));
        if (msgBtn) await msgBtn.edit({ components: [] }).catch(() => {});
      } catch {}

      return await interaction.reply({
        content: `✅ Ticket enviado/liberado para ${membro}.`,
        flags: MessageFlags.Ephemeral
      });
    } catch (e) {
      return await interaction.reply({
        content: `❌ Não consegui liberar o ticket: ${e.message}`,
        flags: MessageFlags.Ephemeral
      });
    }
  }
});


// ============================================
// COMPROVANTE POR DM / MENSAGEM: !comprovante <pedidoId> + anexo
// ============================================

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // aceita em DM ou em canal do servidor (se mandar em público, o bot tenta apagar)
  const match = message.content.match(/!comprovante\s*#?(\d{3,})/i);
  if (!match) return;

  const pedidoId = String(match[1]);

  if (message.attachments.size === 0) {
    return message.reply('❌ Envie o comprovante **junto do comando**.\nEx: `!comprovante ' + pedidoId + '` (com a imagem anexada).');
  }

  const pedidoData = pedidosAtivos.get(pedidoId);
  if (!pedidoData) {
    return message.reply('❌ Pedido não encontrado. Confira o ID do pedido.');
  }

  // regra: só pode enviar comprovante se o pedido foi iniciado
  if (!['aguardando_comprovante', 'comprovante_rejeitado'].includes(pedidoData.status)) {
    return message.reply(`⚠️ Este pedido está no status \`${pedidoData.status}\` e não aceita novo comprovante agora.`);
  }

  // tenta apagar se estiver em canal público
  if (message.guild) {
    const perms = message.channel.permissionsFor(message.guild.members.me);
    if (perms?.has(PermissionsBitField.Flags.ManageMessages)) {
      message.delete().catch(() => {});
    }
  }

  const anexo = message.attachments.first();
  pedidoData.compradorId = message.author.id;
  pedidoData.comprovante = {
    url: anexo.url,
    name: anexo.name || 'comprovante',
    contentType: anexo.contentType || null,
    uploadedAt: Date.now(),
    uploadedBy: message.author.id,
    viewedAt: null,
    viewedBy: null,
    approvedAt: null,
    approvedBy: null,
    rejectedAt: null,
    rejectedBy: null,
    rejectReason: null
  };
  pedidoData.status = 'comprovante_enviado';
  salvarPedidosAtivos();

  // garante canal do pedido
  const guild = await client.guilds.fetch(CONFIG.guildId);
  let canal = null;

  if (pedidoData.canalId) {
    canal = await guild.channels.fetch(pedidoData.canalId).catch(() => null);
  }

  if (!canal) {
    const criado = await criarOuObterCanalPedidoSite(guild, pedidoData.pedido);
    canal = criado.canal;
    pedidoData.canalId = canal.id;
    salvarPedidosAtivos();
  }

  // posta o comprovante no ticket (admin-only)
  await postarComprovanteNoTicketSite(canal, pedidoData.pedido, pedidoData.comprovante, message.author);

  // notifica admins no canal de compras
  const canalCompras = await guild.channels.fetch(CONFIG.canalComprasId).catch(() => null);
  if (canalCompras) {
    const embed = new EmbedBuilder()
      .setTitle(`🧾 Comprovante recebido - Pedido #${pedidoId}`)
      .setColor(0x2F80ED)
      .setDescription(`Comprovante recebido do comprador. Abra o ticket: ${canal}`)
      .setTimestamp();
    await canalCompras.send({ embeds: [embed] }).catch(() => {});
  }

  // confirma para o comprador
  await message.reply(`✅ Comprovante do **Pedido #${pedidoId}** recebido! Agora é só aguardar a verificação da equipe. Você receberá a key por DM aqui no Discord.`);
});


// ============================================
// COMANDOS POR MENSAGEM (sem slash real)
// ============================================

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '/promoções' || message.content === '/promocoes') {
    const embed = new EmbedBuilder()
      .setTitle('🔥 **PROMOÇÕES EM DESTAQUE**')
      .setDescription('🎮 **Os melhores preços!**')
      .addFields(
        { name: '✨ **NOVIDADES**', value: 'Silent Hill F - R$ 39,90\nDying Light - R$ 29,90', inline: false },
        { name: '🏆 **MAIS VENDIDOS**', value: 'Elden Ring - R$ 19,90\nGod of War - R$ 19,90', inline: false }
      )
      .setColor(0xFF4081);

    await message.reply({ embeds: [embed] });
  }

  if (message.content === '/site') {
    const embed = new EmbedBuilder()
      .setTitle('🌐 **SITE OFICIAL**')
      .setDescription(`**Acesse nosso catálogo:**\n${CONFIG.site}`)
      .setColor(0x8A2BE2);

    await message.reply({ embeds: [embed] });
  }

  if (message.content === '/ajuda') {
    const embed = new EmbedBuilder()
      .setTitle('📋 **COMANDOS DISPONÍVEIS**')
      .setDescription('**Call of Store**')
      .addFields(
        { name: '🛒 **COMPRAR**', value: `Clique em COMPRAR no canal <#${CONFIG.canalComprasId}>` },
        { name: '💰 **PROMOÇÕES**', value: '`/promoções`' },
        { name: 'ℹ️ **INFORMAÇÕES**', value: '`/site` `/ajuda`' }
      )
      .setColor(0x8A2BE2);

    await message.reply({ embeds: [embed] });
  }
});

// ============================================
// SERVIDOR WEB
// ============================================

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    bot: 'Call of Store Unificado',
    endpoints: {
      webhook: '/webhook/pedido',
      health: '/health'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    bot: client.isReady() ? 'online' : 'starting',
    pedidos: pedidos.size,
    pedidosAtivos: pedidosAtivos.size,
    ticketsAbertos: ticketsAbertos.size
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Servidor web rodando na porta ${PORT}`);
});

// ============================================
// TRATAMENTO DE ERROS
// ============================================

process.on('unhandledRejection', error => {
  console.error('❌ Erro não tratado:', error);
});

// ============================================
// INICIAR BOT
// ============================================

if (!TOKEN) {
  console.error('❌ ERRO: Token não encontrado! Verifique o arquivo .env');
  process.exit(1);
}

client.login(TOKEN).catch(error => {
  console.error('❌ Erro ao fazer login:', error);
});
