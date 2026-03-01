(function () {
  const STORAGE_KEY = 'callofstore_cart_modern_v3';

  const cartOverlay = document.getElementById('cartOverlay');
  const cartModalBody = document.getElementById('cartModalBody');
  const closeCartModalBtn = document.getElementById('closeCartModal');
  const floatingCart = document.getElementById('floatingCart');
  const floatingCartCount = document.getElementById('floatingCartCount');

  const checkoutOverlay = document.getElementById('checkoutOverlay');
  const checkoutModalBody = document.getElementById('checkoutModalBody');
  const closeCheckoutModalBtn = document.getElementById('closeCheckoutModal');

  let cart = loadCart();
  let lastCheckoutCustomer = null;

  function safe(value) {
    return window.StoreUI?.escapeHtml
      ? window.StoreUI.escapeHtml(value)
      : String(value ?? '');
  }

  function loadCart() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateCount();
  }

  function updateCount() {
    if (!floatingCartCount) return;

    const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    floatingCartCount.textContent = String(total);
    floatingCartCount.hidden = total <= 0;
  }

  function getGame(id) {
    if (!Array.isArray(window.gamesData)) return null;
    return window.gamesData.find(game => Number(game.id) === Number(id)) || null;
  }

  function getApiBaseUrl() {
    const raw = String(window.STORE_CONFIG?.apiBaseUrl || '').trim().replace(/\/$/, '');
    return raw || window.location.origin;
  }

  function getDiscordUrl() {
    return String(window.STORE_CONFIG?.discordUrl || 'https://discord.com/app');
  }

  function add(gameId) {
    const game = getGame(gameId);
    if (!game) return;

    const existing = cart.find(item => Number(item.id) === Number(game.id));
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: Number(game.id), quantity: 1 });
    }

    saveCart();

    if (cartOverlay?.classList.contains('active')) {
      render();
    }

    window.StoreUI?.showToast('Jogo adicionado ao carrinho', game.title);
  }

  function remove(gameId) {
    cart = cart.filter(item => Number(item.id) !== Number(gameId));
    saveCart();
    render();
    window.StoreUI?.showToast('Item removido', 'O jogo foi removido do carrinho.');
  }

  function setQuantity(gameId, nextValue) {
    const item = cart.find(entry => Number(entry.id) === Number(gameId));
    if (!item) return;

    if (nextValue <= 0) {
      remove(gameId);
      return;
    }

    item.quantity = nextValue;
    saveCart();
    render();
  }

  function getTotal() {
    return cart.reduce((sum, item) => {
      const game = getGame(item.id);
      if (!game) return sum;
      return sum + (Number(game.ourPrice || 0) * Number(item.quantity || 0));
    }, 0);
  }

  function buildOrderItems() {
    return cart.map(item => {
      const game = getGame(item.id);
      if (!game) return null;

      return {
        id: Number(game.id),
        nome: game.title,
        preco: Number(game.ourPrice || 0),
        quantidade: Number(item.quantity || 0)
      };
    }).filter(Boolean);
  }

  function open() {
    if (!cartOverlay) return;

    render();
    cartOverlay.classList.add('active');
    cartOverlay.setAttribute('aria-hidden', 'false');
  }

  function close() {
    if (!cartOverlay?.classList.contains('active')) return;

    cartOverlay.classList.remove('active');
    cartOverlay.setAttribute('aria-hidden', 'true');
  }

  function openCheckout() {
    if (!checkoutOverlay) return;
    checkoutOverlay.classList.add('active');
    checkoutOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeCheckout() {
    if (!checkoutOverlay?.classList.contains('active')) return;
    checkoutOverlay.classList.remove('active');
    checkoutOverlay.setAttribute('aria-hidden', 'true');
  }

  function copyText(text, successMessage = 'Copiado') {
    const value = String(text || '').trim();
    if (!value) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value)
        .then(() => window.StoreUI?.showToast(successMessage, 'O conteúdo foi copiado para a área de transferência.'))
        .catch(() => fallbackCopyText(value, successMessage));
      return;
    }

    fallbackCopyText(value, successMessage);
  }

  function fallbackCopyText(text, successMessage) {
    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', 'readonly');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      window.StoreUI?.showToast(successMessage, 'O conteúdo foi copiado para a área de transferência.');
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
    document.body.removeChild(input);
  }

  function getQrImageSrc(rawValue) {
    const value = String(rawValue || '').trim();
    if (!value) return '';
    if (value.startsWith('data:image')) return value;
    return `data:image/png;base64,${value}`;
  }

  function renderCheckoutForm(customer = lastCheckoutCustomer || {}) {
    if (!checkoutModalBody) return;

    const defaultName = safe(customer.name || customer.nome || '');
    const defaultDiscord = safe(customer.discordUser || customer.discord || '');
    const defaultEmail = safe(customer.email || '');
    const items = buildOrderItems();
    const itemsHtml = items.map(item => `
      <div class="checkout-preview-item">
        <span>${safe(item.quantidade)}x ${safe(item.nome)}</span>
        <strong>${window.StoreUI.formatPrice(item.preco * item.quantidade)}</strong>
      </div>
    `).join('');

    checkoutModalBody.innerHTML = `
      <div class="checkout-content">
        <div class="checkout-intro">
          <span class="checkout-badge"><i class="fa-brands fa-discord"></i> Pedido integrado ao bot</span>
          <h4>Finalizar na Call of Store</h4>
          <p>Preencha seus dados para o bot criar o pedido, gerar o PIX e abrir o ticket interno no Discord.</p>
        </div>

        <div class="checkout-preview">
          <div class="checkout-preview-head">
            <span>Resumo do pedido</span>
            <strong>${window.StoreUI.formatPrice(getTotal())}</strong>
          </div>
          <div class="checkout-preview-list">${itemsHtml}</div>
        </div>

        <form id="checkoutForm" class="checkout-form">
          <label class="checkout-field">
            <span>Seu nome</span>
            <input type="text" name="customerName" value="${defaultName}" placeholder="Ex.: Pedro" required>
          </label>

          <label class="checkout-field">
            <span>Seu Discord</span>
            <input type="text" name="discordUser" value="${defaultDiscord}" placeholder="Ex.: ftb_flow8247 ou seu ID" required>
          </label>

          <label class="checkout-field">
            <span>Seu e-mail</span>
            <input type="email" name="email" value="${defaultEmail}" placeholder="Ex.: voce@email.com" required>
          </label>

          <div class="checkout-actions">
            <button class="secondary-btn" type="button" id="checkoutBackButton">
              <i class="fa-solid fa-arrow-left"></i> Voltar
            </button>
            <button class="primary-btn" type="submit" id="checkoutSubmitButton">
              <i class="fa-solid fa-bolt"></i> Gerar PIX e enviar ao bot
            </button>
          </div>
        </form>
      </div>
    `;
  }

  function renderCheckoutLoading() {
    if (!checkoutModalBody) return;

    checkoutModalBody.innerHTML = `
      <div class="checkout-content checkout-state">
        <div class="checkout-loader"></div>
        <h4>Gerando seu pedido</h4>
        <p>O bot está criando o pedido, registrando no Discord e preparando o PIX.</p>
      </div>
    `;
  }

  function renderCheckoutError(message) {
    if (!checkoutModalBody) return;

    checkoutModalBody.innerHTML = `
      <div class="checkout-content checkout-state">
        <div class="checkout-error-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <h4>Não foi possível finalizar</h4>
        <p>${safe(message || 'Ocorreu um erro ao falar com o bot.')}</p>
        <div class="checkout-actions checkout-actions-stack">
          <button class="primary-btn" type="button" id="retryCheckoutButton">
            <i class="fa-solid fa-rotate-right"></i> Tentar novamente
          </button>
          <button class="secondary-btn" type="button" id="closeCheckoutButtonAlt">
            <i class="fa-solid fa-xmark"></i> Fechar
          </button>
        </div>
      </div>
    `;
  }

  function renderCheckoutSuccess(payload, customer) {
    if (!checkoutModalBody) return;

    const pixCode = String(payload.qr_code || '').trim();
    const pixImage = getQrImageSrc(payload.qr_code_base64);
    const command = `!comprovante ${payload.pedidoId}`;

    checkoutModalBody.innerHTML = `
      <div class="checkout-content">
        <div class="checkout-success-head">
          <span class="checkout-badge success"><i class="fa-solid fa-check"></i> Pedido criado</span>
          <h4>Pedido #${safe(payload.pedidoId)}</h4>
          <p>Seu pedido já foi enviado ao bot. Agora é só pagar o PIX e mandar o comprovante no Discord.</p>
        </div>

        <div class="checkout-result-grid">
          <div class="checkout-result-card">
            <span class="checkout-label">Valor</span>
            <strong>${window.StoreUI.formatPrice(payload.total || 0)}</strong>
          </div>
          <div class="checkout-result-card">
            <span class="checkout-label">Status</span>
            <strong>${safe(payload.status || 'pending')}</strong>
          </div>
          <div class="checkout-result-card">
            <span class="checkout-label">Cliente</span>
            <strong>${safe(customer.customerName || customer.name || '')}</strong>
          </div>
          <div class="checkout-result-card">
            <span class="checkout-label">Discord</span>
            <strong>${safe(customer.discordUser || '')}</strong>
          </div>
        </div>

        ${pixImage ? `
          <div class="checkout-pix-box">
            <span class="checkout-label">QR Code PIX</span>
            <img class="checkout-pix-image" src="${pixImage}" alt="QR Code PIX do pedido ${safe(payload.pedidoId)}">
          </div>
        ` : ''}

        <div class="checkout-pix-box">
          <span class="checkout-label">PIX copia e cola</span>
          <textarea class="checkout-pix-code" id="pixCodeField" readonly>${safe(pixCode || 'QR não retornado pelo bot. Confira o painel do pedido.')}</textarea>
          <div class="checkout-actions checkout-actions-stack mobile-row">
            <button class="primary-btn" type="button" id="copyPixButton" ${pixCode ? '' : 'disabled'}>
              <i class="fa-solid fa-copy"></i> Copiar PIX
            </button>
            <button class="secondary-btn" type="button" id="openDiscordButton">
              <i class="fa-brands fa-discord"></i> Abrir Discord
            </button>
          </div>
        </div>

        <div class="checkout-steps">
          <h5>O que fazer agora</h5>
          <ol>
            <li>Pague o PIX acima.</li>
            <li>No Discord, envie uma DM para o bot com o comando <code id="proofCommand">${safe(command)}</code> e anexe o comprovante.</li>
            <li>Após a aprovação, a equipe libera a entrega no seu fluxo normal.</li>
          </ol>
          <button class="ghost-inline-btn" type="button" id="copyCommandButton">
            <i class="fa-solid fa-copy"></i> Copiar comando do comprovante
          </button>
        </div>
      </div>
    `;
  }

  async function submitCheckout(formElement) {
    const formData = new FormData(formElement);
    const customerName = String(formData.get('customerName') || '').trim();
    const discordUser = String(formData.get('discordUser') || '').trim();
    const email = String(formData.get('email') || '').trim();

    if (!customerName || !discordUser || !email) {
      window.StoreUI?.showToast('Dados incompletos', 'Preencha nome, Discord e e-mail para continuar.');
      return;
    }

    const items = buildOrderItems();
    if (!items.length) {
      window.StoreUI?.showToast('Carrinho vazio', 'Adicione itens antes de finalizar.');
      closeCheckout();
      return;
    }

    lastCheckoutCustomer = { customerName, discordUser, email };
    renderCheckoutLoading();

    const payload = {
      cliente: {
        nome: customerName,
        discord: discordUser
      },
      discordUser,
      email,
      jogos: items,
      total: Number(getTotal().toFixed(2))
    };

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/checkout/pix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.sucesso) {
        throw new Error(data?.erro || 'O bot não aceitou o pedido.');
      }

      cart = [];
      saveCart();
      render();
      close();
      renderCheckoutSuccess({ ...data, total: payload.total }, { customerName, discordUser, email });
      window.StoreUI?.showToast('Pedido criado', `Pedido #${data.pedidoId} enviado para o bot.`);
    } catch (error) {
      console.error('Erro no checkout:', error);
      renderCheckoutError(error?.message || 'Erro ao conectar com o bot.');
    }
  }

  function checkout() {
    if (!cart.length) {
      window.StoreUI?.showToast('Seu carrinho está vazio', 'Adicione um jogo antes de finalizar.');
      return;
    }

    openCheckout();
    renderCheckoutForm();
  }

  function renderEmptyState() {
    if (!cartModalBody) return;

    cartModalBody.innerHTML = `
      <div class="cart-wrap">
        <div class="cart-empty">
          <i class="fa-solid fa-cart-shopping"></i>
          <h4>Seu carrinho está vazio</h4>
          <p>Adicione um jogo pelo catálogo para começar sua compra.</p>
        </div>
      </div>
    `;
  }

  function render() {
    if (!cartModalBody) return;

    const normalizedCart = cart.filter(item => getGame(item.id));
    if (normalizedCart.length !== cart.length) {
      cart = normalizedCart;
      saveCart();
    }

    if (!cart.length) {
      renderEmptyState();
      return;
    }

    const itemsHtml = cart.map(item => {
      const game = getGame(item.id);
      if (!game) return '';

      const lineTotal = Number(game.ourPrice || 0) * Number(item.quantity || 0);

      return `
        <div class="cart-item" data-game-id="${game.id}">
          <div class="cart-item-media">
            <img src="${safe(game.image)}" alt="${safe(game.title)}">
          </div>

          <div class="cart-item-info">
            <div>
              <div class="cart-item-title">${safe(game.title)}</div>
              <div class="cart-item-subtitle">${safe((game.category || '').toUpperCase())} • Produto digital</div>
            </div>

            <div class="cart-item-bottom">
              <div class="cart-item-price">${window.StoreUI.formatPrice(lineTotal)}</div>

              <div class="cart-qty">
                <button type="button" data-action="minus" data-id="${game.id}" aria-label="Diminuir quantidade">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-action="plus" data-id="${game.id}" aria-label="Aumentar quantidade">+</button>
              </div>

              <button class="cart-remove" type="button" data-action="remove" data-id="${game.id}">
                <i class="fa-solid fa-trash"></i> Remover
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    cartModalBody.innerHTML = `
      <div class="cart-wrap">
        <div class="cart-list">
          ${itemsHtml}
        </div>

        <div class="cart-summary">
          <div class="cart-summary-top">
            <div>
              <div class="cart-summary-label">Total do carrinho</div>
              <div class="cart-summary-total">${window.StoreUI.formatPrice(getTotal())}</div>
            </div>
            <div class="cart-summary-label">${cart.reduce((sum, item) => sum + item.quantity, 0)} item(ns)</div>
          </div>

          <div class="cart-summary-actions">
            <button class="primary-btn" type="button" id="checkoutButton">
              <i class="fa-brands fa-discord"></i> Finalizar no Discord
            </button>
            <button class="secondary-btn" type="button" id="continueButton">
              <i class="fa-solid fa-bag-shopping"></i> Continuar vendo
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    floatingCart?.addEventListener('click', open);
    closeCartModalBtn?.addEventListener('click', close);
    closeCheckoutModalBtn?.addEventListener('click', closeCheckout);

    cartOverlay?.addEventListener('click', (event) => {
      if (event.target === cartOverlay) {
        close();
      }
    });

    checkoutOverlay?.addEventListener('click', (event) => {
      if (event.target === checkoutOverlay) {
        closeCheckout();
      }
    });

    cartModalBody?.addEventListener('click', (event) => {
      const actionButton = event.target.closest('[data-action]');
      if (actionButton) {
        const gameId = actionButton.dataset.id;
        const action = actionButton.dataset.action;
        const item = cart.find(entry => Number(entry.id) === Number(gameId));

        if (action === 'plus' && item) {
          setQuantity(gameId, item.quantity + 1);
          return;
        }

        if (action === 'minus' && item) {
          setQuantity(gameId, item.quantity - 1);
          return;
        }

        if (action === 'remove') {
          remove(gameId);
          return;
        }
      }

      if (event.target.closest('#checkoutButton')) {
        checkout();
        return;
      }

      if (event.target.closest('#continueButton')) {
        close();
      }
    });

    checkoutModalBody?.addEventListener('click', (event) => {
      if (event.target.closest('#checkoutBackButton')) {
        closeCheckout();
        open();
        return;
      }

      if (event.target.closest('#retryCheckoutButton')) {
        renderCheckoutForm();
        return;
      }

      if (event.target.closest('#closeCheckoutButtonAlt')) {
        closeCheckout();
        return;
      }

      if (event.target.closest('#copyPixButton')) {
        const code = document.getElementById('pixCodeField')?.value || '';
        copyText(code, 'PIX copiado');
        return;
      }

      if (event.target.closest('#copyCommandButton')) {
        const command = document.getElementById('proofCommand')?.textContent || '';
        copyText(command, 'Comando copiado');
        return;
      }

      if (event.target.closest('#openDiscordButton')) {
        window.open(getDiscordUrl(), '_blank', 'noopener,noreferrer');
      }
    });

    checkoutModalBody?.addEventListener('submit', (event) => {
      const formElement = event.target.closest('#checkoutForm');
      if (!formElement) return;
      event.preventDefault();
      submitCheckout(formElement);
    });
  }

  updateCount();
  bindEvents();
  render();

  window.CartApp = {
    add,
    open,
    close,
    openCheckout,
    closeCheckout
  };
})();
