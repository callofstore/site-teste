const gamesData = [
   {
                id: 1,
                title: "Silent Hill f",
                category: "terror",
                steamPrice: 349.90,
                ourPrice: 39.90,
                image: "https://cdn1.epicgames.com/spt-assets/6d34282a26c544df88ccc57505cdd2f0/silent-hill-f-q3uhy.jpg",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i7-4790 ou AMD Ryzen 5 3600",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1660 Ti ou AMD Radeon RX 5600 XT",
                    "DirectX": "Versão 12",
                    "Armazenamento": "60 GB disponíveis"
                }
            },
            {
                id: 2,
                title: "Dying Light: The Beast",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/ddGpXuLZPjkyYwTMP8BgxA5-qLEUD4xnWTaiHM2HpxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0MzQ2/MTMxLmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i7-7700K / AMD Ryzen 5 2600",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "85 GB disponíveis"
                }
            },
            {
                id: 3,
                title: "Hollow Knight: Silksong",
                category: "aventura",
                steamPrice: 59.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/6XA4wJaoOs5WQzynXu40p-zGeFF_SDvYVRqU726xFwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wNS9TaWxrc29u/Zy5qcGcvMjUwcHgt/U2lsa3NvbmcuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-6500 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560",
                    "DirectX": "Versão 11",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 4,
                title: "No, I'm not a Human",
                category: "aventura",
                steamPrice: 47.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/OZEtv-Greq-cYoJRsR749HzTmEI5_VksmMJkESGLJj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvMTkxNDQvNjE2/eDM1My9uby1pLW0t/bm90LWEtaHVtYW4t/cGMtc3RlYW0tY292/ZXIuanBnP3Y9MTc1/ODUyOTEzMA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i3-6100 / AMD FX-8350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 360",
                    "DirectX": "Versão 11",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 5,
                title: "Metal Gear Solid Δ Snake Eater",
                category: "acao",
                steamPrice: 349.90,
                ourPrice: 39.90,
                image: "https://imgs.search.brave.com/_m_ydTHvAB9UbCbI5v99_TBa7VM7ptoTbjChUdoKC2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllXSTNOalk1/WW1FdFptUmlPQzAw/T1dJeUxXRXpPRGt0/T1dNMU5HTTNPVEJq/WkRSaFhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i7-9700K / AMD Ryzen 7 3700X",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
                    "DirectX": "Versão 12",
                    "Armazenamento": "100 GB disponíveis"
                }
            },
            {
                id: 6,
                title: "Hell is Us",
                category: "acao",
                steamPrice: 180.00,
                ourPrice: 27.90,
                image: "https://imgs.search.brave.com/icXx4K3bpYvHsJajFtaHxItLVWGGM7yQkxJ66x5ndI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA4L0hpVV9LZXlh/cnRfMTkyMHgxMDgw/LTIzMngyMzIucG5n",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-8400 / AMD Ryzen 5 2600",
                    "Memória": "12 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 7,
                title: "Clair Obscur: Expedition 33",
                category: "rpg",
                steamPrice: 199.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/V50jjzcg1UTId-rgKizEUvAm0yJRkDhRvD0RpDsMfSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y2xhaXItb2JzY3Vy/LWV4cGVkaXRpb24t/MzMtb3BpbmklQzMl/QjVlcy12MC1mNG9n/bzhxbjdyM2YxLnBu/Zz93aWR0aD02NDAm/Y3JvcD1zbWFydCZh/dXRvPXdlYnAmcz0x/YjBjZDAyNWE1MzNm/YzgyOTkwZGI0Y2U1/MzUyZmFhMDUwMzkx/YmRl",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-6600K / AMD Ryzen 5 1400",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 8,
                title: "Marvel's Spider-Man 2",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/MTBBkecK6f-wFv2hLxewJQXqjii044B2RcUmeb-WW68/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9hcC9ybmQv/MjAyMzA2LzEyMTkv/MWM3Yjc1ZDhlZDky/NzE1MTY1NDY1NjBk/MjE5YWQwYjIyZWUw/YTI2M2I0NTM3YmQ4/LnBuZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4670K / AMD Ryzen 5 1600",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "75 GB disponíveis"
                }
            },
            {
                id: 9,
                title: "Kingdom Come: Deliverance II",
                category: "rpg",
                steamPrice: 299.90,
                ourPrice: 34.90,
                image: "https://imgs.search.brave.com/E9DhQ2bKrQAxwKrB0eZV8e2VucTkJ4VO2KojmAccXO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmVwaWNnYW1lcy5j/b20vc3B0LWFzc2V0/cy9hNzY0MWQ3MjRm/MTI0MmRiOTVmOGY3/MmZjMGZkOGQ4MS9r/aW5nZG9tLWNvbWUt/ZGVsaXZlcmFuY2Ut/Mi0xMWY2dS5wbmc_/cmVzaXplPTEmdz00/ODAmaD0yNzAmcXVh/bGl0eT1tZWRpdW0",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i7-4770K / AMD Ryzen 5 1600",
                    "Memória": "12 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "70 GB disponíveis"
                }
            },
            {
                id: 10,
                title: "Elden Ring",
                category: "rpg",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/D_zt3hp9tgIqdUczuoXqhIYGFwcJ30sIVp-JgQY2Lws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iOS9FbGRlbl9S/aW5nX0JveF9hcnQu/anBnLzI1MHB4LUVs/ZGVuX1JpbmdfQm94/X2FydC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "INTEL CORE I5-8400 or AMD RYZEN 3 3300X",
                    "Memória": "12 GB RAM",
                    "Placa de vídeo": "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "60 GB disponíveis"
                }
            },
            {
                id: 11,
                title: "The Last of Us™ Part I",
                category: "aventura",
                steamPrice: 249.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/hCpoJV3kamibwl4ZXwxQ-eMcLfHjq8LoybryyPZzoIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9UZGtaVE5t/TkRFdE5tRmlOeTAw/TWpobUxUa3pOVFF0/TVdZM01UQTFNall3/WkRabFhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "AMD Ryzen 5 1500X / Intel Core i7-4770K",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 470 (4 GB) / NVIDIA GeForce GTX 970 (4 GB)",
                    "DirectX": "Versão 12",
                    "Armazenamento": "100 GB disponíveis"
                }
            },
            {
                id: 12,
                title: "The Last of Us™ Parte II Remastered",
                category: "aventura",
                steamPrice: 299.90,
                ourPrice: 34.90,
                image: "https://imgs.search.brave.com/xMJMo6HLmF329o6Ky_YuNdG7MqdQN3rI2N9223zJjXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0ySTJObVpt/TXpndE1qSmtZaTAw/WW1ZMUxXSmhNV1V0/TVdFeVl6RmxaR1V3/TTJJM1hrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "AMD Ryzen 5 3600X / Intel Core i7-8700",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 5700 XT (8 GB) / NVIDIA GeForce RTX 2070 Super (8 GB)",
                    "DirectX": "Versão 12",
                    "Armazenamento": "120 GB disponíveis"
                }
            },
            {
                id: 13,
                title: "Ghost of Tsushima DIRECTOR'S CUT",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/bf3Kv-PL4FLIDS5PvEKHv-_6ecigXYP2wiUG8SBRqYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY2NzU2OC1NTEIx/MDAwMjA5NDE0Mzhf/MTIyMDI1LUUud2Vi/cA",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-8600 / AMD Ryzen 5 3600",
                    "Memória": "12 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "75 GB disponíveis"
                }
            },
            {
                id: 14,
                title: "Resident Evil 4 Remake",
                category: "terror",
                steamPrice: 289.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/90wc7CnLYIoYEaEnC8fSy98bihlbAac1QnO28-Et8LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vn/eDVQVV9lN193QzNK/V3k3SUJGTzR5US0y/N0tlQ2QtOWpmMEsz/OVRVcHhBeVllcG1P/bG1zTUp2ZjBaelFL/QXhEblF1N0UxYTJ0/Yll3dU9hSmtJSlpq/X3RUbEstdXdtRzhs/cjdoVmZCYjdxamln/bVNFZnFfZi12eWVV/NE5lb3RXb25qMURF/b256SDlpTzdSLXpT/bE9uazZKT0hpLWFF/MWNTenBtVjBpbmxO/SkxPOW9wQXhUaTBY/TUl4UlgvczE2MDAw/L1Jlc2lkZW50JTIw/RXZpbCUyMDQlMjBS/ZW1ha2UuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "AMD Ryzen 3 1200 / Intel Core i5-7500",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
                    "DirectX": "Versão 12",
                    "Armazenamento": "60 GB disponíveis"
                }
            },
            {
                id: 15,
                title: "Euro Truck Simulator 2",
                category: "esportes",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/Xu0RWbKCIbf6g7fTRgMiW3i8eqoM0FP4M2CCmYjjyvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nzc29mdC5jb20v/YXNzZXRzL2ltYWdl/cy9wcm9qZWN0XzAx/LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 7",
                    "Processador": "Dual core CPU 2.4 GHz",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "GeForce GTS 450-class (Intel HD 4000)",
                    "DirectX": "Versão 11",
                    "Armazenamento": "12 GB disponíveis"
                }
            },
            {
                id: 16,
                title: "Days Gone",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/-_yTCH1I9W6i6Ti_sioUFp6gmSU0cddADaCjqWMFvIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/by1xdWUtdm9jJUMz/JUFBcy1hY2hhbS1z/b2JyZS1kYXlzLWdv/bmUtdjAtOWJ2ZnUz/bTgxMG9kMS5qcGVn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPWVj/ZjY5NGU4MjljMTM5/YjZmMzY0MTY1Yjc0/M2JkZGIxNTcxMTAz/NzU",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD Ryzen 5 1600",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 780 (3 GB) / AMD Radeon R9 290 (4 GB)",
                    "DirectX": "Versão 11",
                    "Armazenamento": "70 GB disponíveis"
                }
            },
            {
                id: 17,
                title: "The Crew Motorfest",
                category: "corrida",
                steamPrice: 249.90,
                ourPrice: 34.90,
                image: "https://imgs.search.brave.com/rT2_ovvz9L1YTv9VdJs83gUupLyXfSJ-ov4BOC7THjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzI2OTg5/NDAvaGVhZGVyLmpw/Zz90PTE3Njc5MDAw/MTA",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4460 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 970 / AMD Radeon RX 480",
                    "DirectX": "Versão 12",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 18,
                title: "Kingdom Come: Deliverance",
                category: "rpg",
                steamPrice: 99.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/UOwFKK9ff3R65PmZtppIqLxEQl4HZSZi1Ou_IayoQOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXZpY2lvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMi9LaW5nZG9t/LUNvbWUtRGVsaXZl/cmFuY2UtMTA2N3g2/MDAuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 7/8/10 64-bit",
                    "Processador": "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 19,
                title: "Elden Ring Nightreign",
                category: "rpg",
                steamPrice: 299.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/ER0vMcnvMUXDiFzJMzFzPPonk9hxgtvpQzROiURMl1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGRl/bnJpbmduaWdodHJl/aWduLndpa2kuZmV4/dHJhbGlmZS5jb20v/ZmlsZS9FbGRlbi1S/aW5nLU5pZ2h0cmVp/Z24vbmlnaHRyZWlu/LWVsZGVuLXJpbmct/d2lraS1ndWlkZS1t/aW4uanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i7-8700K / AMD Ryzen 5 3600X",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56",
                    "DirectX": "Versão 12",
                    "Armazenamento": "80 GB disponíveis"
                }
            },
            {
                id: 20,
                title: "Need for Speed™ Most Wanted",
                category: "corrida",
                steamPrice: 99.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/xLIE9HArDN35TskVN_5F0pe97So8pHj5IcNduYRmmuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC92U0dQT0hI/LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows Vista/7/8",
                    "Processador": "2.0 GHz Core 2 Duo (2.2 GHz Core 2 Duo recommended)",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "512 MB DirectX 10.0 (1 GB DirectX 10.1 recommended)",
                    "DirectX": "Versão 10",
                    "Armazenamento": "20 GB disponíveis"
                }
            },
            {
                id: 21,
                title: "Forza Horizon 5",
                category: "corrida",
                steamPrice: 249.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/iSKujoz_qsPIDoz4b7OiXX53vg-A3bu7IAWhmiAkZe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEQTVNMk00/WW1FdE1ETXhZeTAw/WlRrNUxXSXdOR1l0/TkRSbU1qSTJPVEEz/T0dOaVhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 version 15063.0 or higher",
                    "Processador": "Intel i5-4460 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVidia GTX 970 / AMD RX 470",
                    "DirectX": "Versão 12",
                    "Armazenamento": "110 GB disponíveis"
                }
            },
            {
                id: 22,
                title: "Forza Horizon 4",
                category: "corrida",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/3olS7vlbFg3s84WVG54_XBZnvMqlaUBQwPQm8vtdKyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjAv/MDcvMjIvZm9yemEt/aG9yaXpvbi00LWJ1/dHRvbi1maW4tMTU5/NTQzNTE5MDE4Ni5q/cGc_Y3JvcD0xOjEs/c21hcnQmZm9ybWF0/PWpwZyZhdXRvPXdl/YnAmcXVhbGl0eT04/MA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel i3-4170 @ 3.7Ghz / Intel i5 750 @ 2.67Ghz",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVidia GTX 650 Ti / AMD R7 250X",
                    "DirectX": "Versão 12",
                    "Armazenamento": "80 GB disponíveis"
                }
            },
            {
                id: 23,
                title: "SILENT HILL 2",
                category: "terror",
                steamPrice: 199.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/uOB1F1kipXHvoCmKK9DtVADJ9k-p-91mFUBx17OtZa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvc2ls/ZW50LWhpbGwtMi1j/YXBhLTMxMHgzMTAu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-8400 / AMD Ryzen 3 3300X",
                    "Memória": "12 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700",
                    "DirectX": "Versão 12",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 24,
                title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 39.90,
                image: "https://imgs.search.brave.com/Y4pD06dOrzZpQ2j_q8SzSrHWpTw3mZJjNZMpvjtYLRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnF1/YWxiZXJ0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/MS9TdGFsa2VyLTIt/dGl0bGUuanBnP3Jl/c2l6ZT0xMTcwLDcy/MCZzc2w9MQ",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "AMD Ryzen 5 1600X / Intel Core i5-7600K",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 580 8GB / NVIDIA GeForce GTX 1060 6GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "150 GB disponíveis"
                }
            },
            {
                id: 25,
                title: "Metal Gear Solid V: The Phantom Pain",
                category: "acao",
                steamPrice: 149.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/CClaZmqmRmi8GvmbGMycVyGKSfjkMNf9ESr2WKqkY6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTkvMDgv/MjYvbWdzLTUtcGhh/bnRvbS1wYWluLS0t/YnV0dG9uLWZpbi0x/NTY2ODUwNjE0NDY3/LmpwZz9jcm9wPTE6/MSxzbWFydCZmb3Jt/YXQ9anBnJmF1dG89/d2VicCZxdWFsaXR5/PTgw",
                requirements: {
                    "Sistema Operacional": "Windows 7x64, Windows 8x64",
                    "Processador": "Intel Core i5-4460 (3.40 GHz) or better",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 650 (2GB) or better",
                    "DirectX": "Versão 11",
                    "Armazenamento": "28 GB disponíveis"
                }
            },
            {
                id: 26,
                title: "Metro Exodus",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/8fsNa7qPxG26wZqzOT0z1elqHoBYIykTtRg44QYQzRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTgvMTIv/MTQvbWV0cm8tZXhv/ZHVzLS0tYnV0dG9u/LTE1NDQ3NTA0MTg5/ODUuanBnP2Nyb3A9/MToxLHNtYXJ0JmZv/cm1hdD1qcGcmYXV0/bz13ZWJwJnF1YWxp/dHk9ODA",
                requirements: {
                    "Sistema Operacional": "Windows 7/8/10",
                    "Processador": "Intel Core i5-4440 or equivalent",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "GeForce GTX 670 / GeForce GTX 1050 / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "59 GB disponíveis"
                }
            },
            {
                id: 27,
                title: "The Elder Scrolls IV: Oblivion Remastered",
                category: "rpg",
                steamPrice: 199.90,
                ourPrice: 34.90,
                image: "https://imgs.search.brave.com/d4mUN10CioGb0JOVUR8kTxbwOtwnyu_OKDaZxukeu4U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXRzLWhhcHBlbmVk/LW9ibGl2aW9uLXJl/bWFzdGVyZWQtdjAt/bnl5M2UzcXZxenVl/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZTZkYWY1Mjlk/MDg3M2NkZDAxZDMx/NzYzMTU4YTA0NDcw/MWJlMDJlYw",
                requirements: {
                    "Sistema Operacional": "Windows XP/2000",
                    "Processador": "2 Ghz Intel Pentium 4 or equivalent",
                    "Memória": "512 MB RAM",
                    "Placa de vídeo": "128 MB Direct3D compatible video card",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "4.6 GB disponíveis"
                }
            },
            {
                id: 28,
                title: "Ready or Not",
                category: "acao",
                steamPrice: 149.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/F2jNOx7UcX7yefpsRrQAQVMcBWAC7Z6PDFIlEIVXHWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ1NzE5/MjEuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-4430 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 30,
                title: "Stray",
                category: "aventura",
                steamPrice: 99.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/so_0VmHrrsgVvEtIowW4H7d6EqNLVIXyO2vsik1uNkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mMS9TdHJheV9j/b3Zlcl9hcnQuanBn/LzI1MHB4LVN0cmF5/X2NvdmVyX2FydC5q/cGc",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2300 | AMD FX-6350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "10 GB disponíveis"
                }
            },
            {
                id: 31,
                title: "Split Fiction",
                category: "acao",
                steamPrice: 89.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/uqoEAq7CQXYNeeD9NAWqCpXiOpXbkNpJG2C7sF70G1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWdh/emluZS5hcnRzdGF0/aW9uLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMy9t/YWdhemluZV90aHVt/Ym5haWxfMTI4MHg3/MjAucG5nP3c9NzIw/Jmg9NDA1JmNyb3A9/MQ",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2500K / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 32,
                title: "The Elder Scrolls V: Skyrim Special Edition",
                category: "rpg",
                steamPrice: 99.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/BeAcluQ3INd-_VxEfavcs5Zh7S8g2oRaIqSOFCjpn3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RlYW11c2Vy/Y29udGVudC5jb20v/dWdjLzE3NDY4MDY3/OTE0MDgyNTU4NDcv/MTI5QzIyREI3Njgy/MkRGRjkzQ0NBRTEw/RkI5Q0MyQjc5MTE1/RkVDMC8_aW13PTEy/OCZpbWg9MTI4Jmlt/YT1maXQmaW1wb2xp/Y3k9TGV0dGVyYm94/JmltY29sb3I9IzAw/MDAwMCZsZXR0ZXJi/b3g9dHJ1ZQ",
                requirements: {
                    "Sistema Operacional": "Windows 7/8.1/10 (64-bit)",
                    "Processador": "Intel i5-750/AMD Phenom II X4-945",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 470 1GB /AMD HD 7870 2GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "12 GB disponíveis"
                }
            },
            {
                id: 33,
                title: "Detroit: Become Human",
                category: "aventura",
                steamPrice: 149.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/YxIMfcZpdz4COgAyE-qPL_tcjJ_lW5230EH5IOrGLpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMwOTEy/MTcuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2300 @ 2.8 GHz / AMD Ryzen 3 1200 @ 3.1GHz",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "Nvidia GeForce GTX 780 / AMD Radeon HD 7950",
                    "DirectX": "Versão 12",
                    "Armazenamento": "55 GB disponíveis"
                }
            },
            {
                id: 34,
                title: "Baldur's Gate 3",
                category: "rpg",
                steamPrice: 229.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/Gvt7oHsJmCLMLEFI8WPEKk4t23oA91L5_0SV9ahDPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTUz/MDE2MS5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel I5 4690 / AMD FX 8350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "Nvidia GTX 970 / AMD RX 480",
                    "DirectX": "Versão 11",
                    "Armazenamento": "150 GB disponíveis"
                }
            },
            {
                id: 35,
                title: "BLEACH Rebirth of Souls",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/EwJfFnONM7EzlTwO-Ddydwpn-oJMsLqoaO425SRnlDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnF1/YWxiZXJ0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9CTEVBQ0gtUk9T/LVdhbGxwYXBlci1B/cnRpY2xlLmpwZz9y/ZXNpemU9MTE3MCw3/MjAmc3NsPTE",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-3470 / AMD FX-8350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 36,
                title: "Devil May Cry 5",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/IUSfC8PtdTGW_acztyAuVWhn0HJpt_D8V-PFSQBsnJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLmdl/dHR5d2FsbHBhcGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTAvRGV2/aWwtTWF5LUNyeS01/LVByb2ZpbGUtSW1h/Z2UuanBn",
                requirements: {
                    "Sistema Operacional": "WINDOWS 7, 8.1, 10 (64-BIT Required)",
                    "Processador": "Intel Core i7-3770 / AMD FX-9590 or better",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 480",
                    "DirectX": "Versão 11",
                    "Armazenamento": "35 GB disponíveis"
                }
            },
            {
                id: 37,
                title: "Devil May Cry 4",
                category: "acao",
                steamPrice: 99.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/_-xWn5A-F_g8GLAA68y319mGlH7oZY5UNP-l6QjuFhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk3/MTM2Ny5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows XP",
                    "Processador": "Pentium 4 or Athlon equivalent",
                    "Memória": "512 MB RAM",
                    "Placa de vídeo": "DirectX 9.0c / Shader 3.0",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "8 GB disponíveis"
                }
            },
            {
                id: 38,
                title: "Horizon Forbidden West™ Complete Edition",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/4cmuDDRztPWv5sedcUYql2JN2lrujLFvLyQv0qJ7zJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oeXBl/LmdhbWVzL19uZXh0/L2ltYWdlP3VybD1o/dHRwczovL2ltZy5o/eXBlLmdhbWVzL2Nk/bi83YWY5MWEyOS1i/M2MzLTQ3MTYtOGY3/NC02OWNmMWU2ZTU5/OGVIT1JJWk9OLUZP/UkJJRERFTi1XRVNU/X0NPVkVSLnBuZyZ3/PTc1MCZxPTc1",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-8600 / AMD Ryzen 5 3600",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1660 / AMD Radeon RX 5500 XT",
                    "DirectX": "Versão 12",
                    "Armazenamento": "100 GB disponíveis"
                }
            },
            {
                id: 39,
                title: "Horizon Zero Dawn™ Complete Edition",
                category: "acao",
                steamPrice: 149.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/rWl57hQaQOhsSQrRELyAUS6WLEFKTG7JXqen85-ttis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXBsYXlzY2Fz/c2kuY29tLmJyL29m/ZXJ0YXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDQvSG9y/aXpvbi1aZXJvLURh/d24tQ29tcGxldGUt/RWRpdGlvbi5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD FX 6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 780 / AMD Radeon R9 290",
                    "DirectX": "Versão 12",
                    "Armazenamento": "100 GB disponíveis"
                }
            },
            {
                id: 40,
                title: "Dragon Ball: Sparking! Zero",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/uvDX13sxvx6qmfnYbI9lEWZpf8-sFRhmi7yszAZBOPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/ZHJhZ29uLWJhbGwt/c3BhcmtpbmctemVy/by12YWxlLWEtcGVu/YS12MC1pMmNuNnpw/anpsZWUxLmpwZWc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9N2Iw/YjAzNjFmNDhjZWIx/OWE1ZjJlYzAyNTVk/YTY2YjJiYWExZGJk/Yg",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2300 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 960 / AMD Radeon R9 280X",
                    "DirectX": "Versão 11",
                    "Armazenamento": "30 GB disponíveis"
                }
            },
            {
                id: 41,
                title: "Death Stranding Director's Cut",
                category: "aventura",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/Pjkq84Kpvwg7B1iUFAZKtwPU_3F9I6IcAvn92L9R6u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmVwaWNnYW1lcy5j/b20vb2ZmZXIvMGE5/ZTNjNWFiNjY4NDUw/NmJkNjI0YTg0OWNh/MGNmMzkvRUdTX0Rl/YXRoU3RyYW5kaW5n/RGlyZWN0b3JzQ3V0/X0tPSklNQVBST0RV/Q1RJT05TX1MzXzI1/NjB4MTQ0MC1mZTRl/NTFmMTgwMWZiYTM2/ZTQ1MmFhMzQ2NjYy/NTc4OT9yZXNpemU9/MSZ3PTQ4MCZoPTI3/MCZxdWFsaXR5PW1l/ZGl1bQ",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-3470 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1050 3 GB / AMD Radeon RX 560 4 GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "80 GB disponíveis"
                }
            },
            {
                id: 42,
                title: "171",
                category: "acao",
                steamPrice: 89.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/-5abzwz9FkvBkNmMooYOfGlfqShO-F7SP2kuEgMkfg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubnV1dmVtLmNv/bS9pbWFnZS91cGxv/YWQvdF9iYW5uZXJf/YmlnL3YxL3Byb2R1/Y3RzLzYzNmQzOTlh/MDdmZTQ3MDAxOGQ1/NDMyMi9iYW5uZXJz/L3B5enl4Nmp1Y3hm/cmZzM3l5anplLmpw/Zw",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2400 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "20 GB disponíveis"
                }
            },
            {
                id: 43,
                title: "DARK SOULS™ II",
                category: "rpg",
                steamPrice: 119.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/SKEbyDdYrohTBsyzWTAmIH_5xrc1KasyyU5Y6yXa6Ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5ODEw/MTMuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 7 SP1 64bit, Windows 8.1 64bit",
                    "Processador": "AMD Phenom II X2 555 3.2GHz / Intel Pentium Core 2 Duo E8500 3.17GHz",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce 9600GT / ATI Radeon HD 5870",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "14 GB disponíveis"
                }
            },
            {
                id: 44,
                title: "DARK SOULS™ III",
                category: "rpg",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/zxBo-bdxIXzaDFakHeKu5hAXLFjb8hkPcOwIis-aa20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy1l/YXN0LTEtYmFuZGFp/LmdyYXBoYXNzZXRz/LmNvbS9BWHppb0lj/bFNXaWxFakZ0c01K/UHd6L2tzVlR0Y2ZQ/UW1PZk1GMnZURkNL",
                requirements: {
                    "Sistema Operacional": "Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit",
                    "Processador": "Intel Core i3-2100 / AMD FX-6300",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 45,
                title: "DARK SOULS™: REMASTERED",
                category: "rpg",
                steamPrice: 159.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/EsLjU11tprXn74WraWaq6ZI_uDup2jaKhYYYNW4ZJYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvc3RvcmUvc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDA4/MTIyLzQ1M2QxN2Yy/Njk5NWRmNmJkNjdk/Njk4YzkwYmEyZmQy/NzE1N2E2MTg3NWUx/YTk3MzA1NDVkYTIz/NDc0YzZhYWY",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core i5-2300 2.8 GHz / AMD FX-6300, 3.5 GHz",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 460, 1 GB / AMD Radeon HD 6870, 1 GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "8 GB disponíveis"
                }
            },
            {
                id: 46,
                title: "Sekiro™: Shadows Die Twice - GOTY Edition",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/PJ5roc8auiSuQlhkYZGTiZ-PlOIt1_N2j9baHf8Xlh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzgxNDM4/MC9oZWFkZXIuanBn/P3Q9MTc2Mjg4ODY2/Mg",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
                    "Processador": "Intel Core i3-2100 | AMD FX-6300",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 | AMD Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 47,
                title: "Shadow of the Tomb Raider: Definitive Edition",
                category: "aventura",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/UazPMdWUIpxorP_M3xNfm28vO_8HeV0hhJmJtPN-KiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1p/bmctY2RuLmNvbS9p/bWFnZXMvcHJvZHVj/dHMvNTg1Mi82MTZ4/MzUzL3NoYWRvdy1v/Zi10aGUtdG9tYi1y/YWlkZXItZGVmaW5p/dGl2ZS1lZGl0aW9u/LXBjLW1hYy1zdGVh/bS1jb3Zlci5qcGc_/dj0xNzY3MDAwMDQx",
                requirements: {
                    "Sistema Operacional": "Windows 7 64 bit",
                    "Processador": "i3-3220 INTEL or AMD Equivalent",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "Nvidia GTX 660/GTX 1050 or AMD Radeon HD 7770",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 48,
                title: "Marvel's Spider-Man: Miles Morales",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/w-FoAWjJyFpHz1G0L8UcnWd9WT-kCif-rUDamU4jtoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8xMTEwODE5OV9B/TFQwMS9NYXJ2ZWxz/LVNwaWRlci1NYW4t/TWlsZXMtTW9yYWxl/cz8kcGRwJD93PTEy/NTYmaD02NjQmZm10/PWF1dG8",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4670 / AMD Ryzen 5 1600",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 1060 6GB / AMD Radeon RX 580 8GB",
                    "DirectX": "Versão 12",
                    "Armazenamento": "75 GB disponíveis"
                }
            },
            {
                id: 49,
                title: "Marvel's Spider-Man Remastered",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/WKYLe3KGvba-ylYogL5qVBNZP9A7--iPNZ7MWEtArSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Nw/aWRlcm1hbnBzNC9p/bWFnZXMvZC9kNC9N/YXJ2ZWwnc19TcGlk/ZXItTWFuX2Zyb250/X2NvdmVyXyhVUyku/cG5nL3JldmlzaW9u/L2xhdGVzdC9zY2Fs/ZS10by13aWR0aC1k/b3duLzI2OD9jYj0y/MDIwMTAwMzE4MjQz/Mg",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i3-4160 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 950 / AMD Radeon RX 470",
                    "DirectX": "Versão 12",
                    "Armazenamento": "75 GB disponíveis"
                }
            },
            {
                id: 50,
                title: "Grand Theft Auto IV: The Complete Edition",
                category: "acao",
                steamPrice: 119.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/oHiK6BNcAWTFJB8L5Yhf07RxN_NATv7_zG_dtpH2P04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGVh/bXVubG9ja2VkLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNC9ncmFuZC10/aGVmdC1hdXRvLWl2/LXRoZS1jb21wbGV0/ZS1lZGl0aW9uLWZy/ZWUtZG93bmxvYWQu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core 2 Duo 1.8GHz / AMD Athlon X2 64 2.4GHz",
                    "Memória": "1.5 GB RAM",
                    "Placa de vídeo": "256MB NVIDIA 7900 / 256MB ATI X1900",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "22 GB disponíveis"
                }
            },
            {
                id: 51,
                title: "Resident Evil Village",
                category: "terror",
                steamPrice: 199.90,
                ourPrice: 27.90,
                image: "https://imgs.search.brave.com/4940t6nv_dHLsVSj5-neXnCUXt_WdESxjP7j1sascn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubnV1dmVtLmNv/bS9pbWFnZS91cGxv/YWQvdF9ib3hzaG90/X2JpZy92MS9wcm9k/dWN0cy82MDBmMzZi/MWM4ODNlNjQ2NGMw/NTI4ODIvYm94c2hv/dHMvaWhyZzBqYnBu/dHR1eG9ueTl4bWQu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-7500 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560",
                    "DirectX": "Versão 12",
                    "Armazenamento": "45 GB disponíveis"
                }
            },
            {
                id: 52,
                title: "Resident Evil 3",
                category: "terror",
                steamPrice: 159.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/6dewr0mjpPvAuD6b-avfpAY3C13By3IywMlQH0xiaCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYwOTgx/MzUuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4460 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 960 / AMD Radeon R7 370",
                    "DirectX": "Versão 11",
                    "Armazenamento": "45 GB disponíveis"
                }
            },
            {
                id: 53,
                title: "Resident Evil 2",
                category: "terror",
                steamPrice: 159.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/ITwhXx1fXNs7D_wfQU0IPDt8AzcFIdRHMDfiSQp8IvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5ERmhZalJq/TXpRdE5EUXhNQzAw/T0RNeUxXSmpabUl0/T1RNMU1XVmhZalJt/WlRBNVhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4460 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 960 / AMD Radeon R7 370",
                    "DirectX": "Versão 11",
                    "Armazenamento": "26 GB disponíveis"
                }
            },
            {
                id: 54,
                title: "Resident Evil 7 Biohazard",
                category: "terror",
                steamPrice: 159.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/4lShzEyV8qYmC4tV8hUL0HLv5Sowa1zEkXp9-TKQg-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MTIvMjAvcmVzaWRl/bnQtZXZpbC03LWJ1/dHRvbi1maW4tMTY0/MDAzODgzODQxOS5q/cGc_Y3JvcD0xOjEs/c21hcnQmZm9ybWF0/PWpwZyZhdXRvPXdl/YnAmcXVhbGl0eT04/MA",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4460 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon R7 260x",
                    "DirectX": "Versão 11",
                    "Armazenamento": "24 GB disponíveis"
                }
            },
            {
                id: 55,
                title: "Far Cry® 5",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/Tfo5-QVBUvkl7J6exh9q1D2IEMu_EJkhO9nVO4NQRLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXVw/cy5jb20uYnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDMv/RmFyLUNyeS01LTIu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2400 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 670 / AMD R9 270",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 56,
                title: "Far Cry® 4",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/oFLBp6RzhelqiSUdCJXFbRJcRd9OEebhAzr37qgML-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MzM5/NjcuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core i5-750 / AMD Phenom II X4 955",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 460 / AMD Radeon HD 5850",
                    "DirectX": "Versão 11",
                    "Armazenamento": "30 GB disponíveis"
                }
            },
            {
                id: 57,
                title: "Far Cry® 3",
                category: "acao",
                steamPrice: 99.90,
                ourPrice: 14.90,
                image: "https://imgs.search.brave.com/goCVDFOlHRv_TuxZvDA1orZaS84uiWIXu7A91Gcq6MQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGF1bmNoYm94/LWFwcC5jb20vZDc0/NjA2MDAtMjhmNy00/ZTgzLThiMTAtMGQ2/OTI0NjdiNjQyLmpw/Zw",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core i3-530 / AMD Phenom II X2 565",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 480 / AMD Radeon HD 5770",
                    "DirectX": "Versão 11",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 58,
                title: "UNCHARTED™: Legacy of Thieves Collection",
                category: "aventura",
                steamPrice: 249.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/LXpEA7XnStTmQv2TtSBwLzLWN_u5NO-x1jsgStVZLMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oeXBl/LmdhbWVzL19uZXh0/L2ltYWdlP3VybD1o/dHRwczovL2ltZy5o/eXBlLmdhbWVzL2Nk/bi8zMTg5OWJmOC01/MmY1LTQ2OWEtYTIw/MS02MTE3ZTMzNDBk/MTBbTmV4d2F5XS1V/TkNIQVJURUQtTGVn/YWN5LW9mLVRoaWV2/ZXMtQ29sbGVjdGlv/bl9Db3Zlci5wbmcm/dz03NTAmcT03NQ",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel i5-4430 / AMD Ryzen 3 1200",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 960 / AMD R9 290X",
                    "DirectX": "Versão 12",
                    "Armazenamento": "126 GB disponíveis"
                }
            },
            {
                id: 59,
                title: "RoadCraft",
                category: "corrida",
                steamPrice: 99.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/6Nm1iMpFPljTe3u4OKDLIq4JvcyYQwgyUfJQGRBAs_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wc3hi/cmFzaWwuY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAyL1JvYWRDcmFm/dC1EYXRlXzAxLTI4/LTI1LTM5MHgyMjAu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2500K / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "20 GB disponíveis"
                }
            },
            {
                id: 60,
                title: "BeamNG.drive",
                category: "corrida",
                steamPrice: 89.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/2xdY3IokGdrI-wq5qZLD6m-6JLjfkey5nNMwEI2ZCKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzI4NDE2/MC9jYXBzdWxlXzYx/NngzNTMuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel i5-2300 / AMD FX-4300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon R9 270",
                    "DirectX": "Versão 11",
                    "Armazenamento": "20 GB disponíveis"
                }
            },
            {
                id: 61,
                title: "Starfield",
                category: "rpg",
                steamPrice: 299.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/FAjIcbDWWvGvx1FZNluKlmNzT8bQwv8s1vTi173pKYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMTAz/NTE1LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "AMD Ryzen 5 2600X / Intel Core i7-6800K",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 5700 / NVIDIA GeForce 1070 Ti",
                    "DirectX": "Versão 12",
                    "Armazenamento": "125 GB disponíveis"
                }
            },
            {
                id: 62,
                title: "Mortal Kombat 11",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/tp1uK-USJ2O3GwhoYANmsq890manzXh1XLzZgfpEiIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXBsYXlzY2Fz/c2kuY29tLmJyL29m/ZXJ0YXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDQvTW9y/dGFsLUtvbWJhdC0x/MS5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2300 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 780 / AMD Radeon R9 290",
                    "DirectX": "Versão 11",
                    "Armazenamento": "110 GB disponíveis"
                }
            },
            {
                id: 63,
                title: "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS",
                category: "acao",
                steamPrice: 299.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/mRl9RqleaxDdBW-1v3D7HdtLaEolxtqmooE2w8ZfZBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14czFj/ZXZ4ZTQzL2ltYWdl/cy9zdGVuY2lsLzU3/MHg3NjAvcHJvZHVj/dHMvMjc5My8xMjcz/Ni9uYXJ1dG8teC1i/b3J1dG8tdWx0aW1h/dGUtbmluamEtc3Rv/cm0tY29ubmVjdGlv/bnMtYWdub3N0aWNf/Xzk2MzUzLjE2OTI2/MjkxODIuanBnP2M9/Mg",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-3470 / AMD FX-8350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 960 / AMD Radeon R9 280X",
                    "DirectX": "Versão 11",
                    "Armazenamento": "30 GB disponíveis"
                }
            },
            {
                id: 64,
                title: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/jJoljhFEUxPZarScmpOrP9xImjyquNDx-cFNY4LrDPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzM0OTA0/MC9oZWFkZXIuanBn/P3Q9MTcwMzA4MDg2/Ng",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core i3-530 / AMD Phenom II X4 940",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 650 / AMD Radeon HD 6570",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 65,
                title: "Palworld",
                category: "aventura",
                steamPrice: 109.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/cYCheF_IVB1vinMH-yrY02xuV0_l5oLbl2a4ALfz28k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9J/bHRNSUplSy0xTS9t/YXhyZXNkZWZhdWx0/LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "i5-3570K 3.4 GHz",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "GeForce RTX 2070",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 66,
                title: "HumanitZ",
                category: "acao",
                steamPrice: 69.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/KhTHQiJKZZHDiIg3Z3I27Wb5d7tKBkwSMb-aEJZxcTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjIv/MTIvMTAvaHVtYW5p/dHotMTY3MDcwMzM0/NzU2Mi5qcGc_Y3Jv/cD0xOjEsc21hcnQm/Zm9ybWF0PWpwZyZh/dXRvPXdlYnAmcXVh/bGl0eT04MA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2300 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "20 GB disponíveis"
                }
            },
            {
                id: 67,
                title: "Project Zomboid",
                category: "terror",
                steamPrice: 59.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/h8VuzSO9kr1QPmgnSoNlDKsMbkhMQjapHWZGGW1S4ao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEwNzU1/MDE5LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel 2.77GHz Dual-core",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GT 330 / AMD Radeon HD 5450",
                    "DirectX": "Versão 11",
                    "Armazenamento": "7 GB disponíveis"
                }
            },
            {
                id: 68,
                title: "Overcooked",
                category: "acao",
                steamPrice: 79.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/ASJZkbSBSd8trKP6EDreh9-7i8GpRKPSDwDaV2CwLIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzE3/LzhiLzczMTc4YmZi/ZjNlYmQ2NjI0N2Qw/NjFhNzg3YzkxZTA4/LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel i3-2100 / AMD A8-5600k",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "GeForce GTX 630 / Radeon HD 6570",
                    "DirectX": "Versão 11",
                    "Armazenamento": "3 GB disponíveis"
                }
            },
            {
                id: 69,
                title: "Farming Simulator 22",
                category: "esportes",
                steamPrice: 149.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/kwR3z3eMCJuct42Q4Wjowg4tTZCunkZ2RselYR3zqwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9pbWcvcm5k/LzIwMjEwNy8wNTA4/L3dnMGdEMlhJTkpY/ZUpveDNtcllTUm9x/QS5wbmc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-3330 / AMD FX-8320",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "GeForce GTX 660 / AMD Radeon R7 265",
                    "DirectX": "Versão 11",
                    "Armazenamento": "35 GB disponíveis"
                }
            },
            {
                id: 70,
                title: "Car Mechanic Simulator 2021",
                category: "esportes",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/6Bks2u6mhRzVEqZBRdeqn3J0wHycR6ELJBaUR1aqkFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Nh/ci1tZWNoYW5pYy1z/aW11bGF0b3ItMjAy/MS9pbWFnZXMvZS9l/MS9DTVNfMjAyMV9C/YW5uZXIuanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzY3/MD9jYj0yMDIxMTEw/OTIxMjkzMA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5 4690 / AMD Ryzen 5 1500X",
                    "Memória": "16 GB RAM",
                    "Placa de vídeo": "GeForce GTX 960 4GB / Radeon R9 380",
                    "DirectX": "Versão 11",
                    "Armazenamento": "35 GB disponíveis"
                }
            },
            {
                id: 71,
                title: "Assetto Corsa",
                category: "corrida",
                steamPrice: 99.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/T7s1nOvLULQRLfiE765Ei5NuDqW7mZFLbXyyJIp2IW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81MDVn/YW1lcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDIv/QXNzZXR0by1Db3Jz/YS03NTJ4NDMwLTEu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core2 Duo E6600 / AMD Athlon 64 X2 5200+",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "GeForce 8600 GT / Radeon HD 3670",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 72,
                title: "Nioh 2 – The Complete Edition",
                category: "acao",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/AQYZIsnCIGARWLB1J8SdhBDkWFjoMZJfPlchXNyJ_K8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnVucmVhbGVuZ2lu/ZS5jb20vZWdzLW5p/b2gydGhlY29tcGxl/dGVlZGl0aW9uLWtv/ZWl0ZWNtb2dhbWVz/Y29sdGQtczItMTIw/MHgxNjAwLThjMzMx/MDlhYmJmYi5qcGc_/cmVzaXplPTEmdz00/ODAmaD0yNzAmcXVh/bGl0eT1tZWRpdW0",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5 4460 / AMD FX-6300",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 970 / AMD Radeon RX 470",
                    "DirectX": "Versão 11",
                    "Armazenamento": "85 GB disponíveis"
                }
            },
            {
                id: 73,
                title: "Hollow Knight",
                category: "aventura",
                steamPrice: 39.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/PYS-shiHbQAqwBPsCUVE26m2zojSEVd_0ID-T_T02Xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDgvaG9s/bG93LWtuaWdodC1j/YXBhLTIxMHgyMTAu/anBn",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core 2 Duo E5200",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "GeForce 9800GTX+ / AMD HD 4870",
                    "DirectX": "Versão 10",
                    "Armazenamento": "9 GB disponíveis"
                }
            },
            {
                id: 74,
                title: "Cuphead",
                category: "aventura",
                steamPrice: 69.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/axcq1nAekzuacMKhxvjzSVKTw3Imxm5jQb9nUFp8IiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb2d1/bmxvY2tlZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQ3VwaGVhZC1G/cmVlLURvd25sb2Fk/LTYzOXgzNjEuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 7",
                    "Processador": "Intel Core2 Duo E8400 / AMD Athlon 64 X2 6000+",
                    "Memória": "3 GB RAM",
                    "Placa de vídeo": "GeForce 9600 GT / AMD HD 3870",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "4 GB disponíveis"
                }
            },
            {
                id: 75,
                title: "Sonic Mania",
                category: "aventura",
                steamPrice: 59.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/LJ2HDevlsjf1wgRqmbaB16vh1Cs2z3TZkxymmVKxkvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM1NDM3/MDcucG5n",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "Intel Core i5 2.6GHz",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 560 / AMD Radeon HD 5770",
                    "DirectX": "Versão 10",
                    "Armazenamento": "3 GB disponíveis"
                }
            },
            {
                id: 76,
                title: "Crash Bandicoot™ N. Sane Trilogy",
                category: "aventura",
                steamPrice: 149.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/iFZLahllkgoRPFa7uTHg0a9VN6QHloNYmhIylSmidg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTgvMDMv/MDkvY3Jhc2gtYmFu/ZGljb290LW4tc2Fu/ZS10cmlsb2d5LS0t/YnV0dG9uLWYtMTUy/MDU2MzM5NTUwMS5q/cGc_Y3JvcD0xOjEs/c21hcnQmZm9ybWF0/PWpwZyZhdXRvPXdl/YnAmcXVhbGl0eT04/MA",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-750 / AMD Phenom II X4 965",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 660 / AMD Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "30 GB disponíveis"
                }
            },
            {
                id: 77,
                title: "Riders Republic",
                category: "esportes",
                steamPrice: 249.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/Tk7_o4xP_AuyT5KLW7eyt2dF4UMO771_dqV5KOfnoOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEwNDcw/NDEyLmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4460 / AMD Ryzen 5 1400",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 970 / AMD Radeon RX 480",
                    "DirectX": "Versão 12",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 78,
                title: "Tony Hawk's™ Pro Skater™ 1 + 2",
                category: "esportes",
                steamPrice: 199.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/Us2qMYb5sYHgXmP4FuoJj4ZyMFTn458K0L66n9pt6Qo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvc3RvcmUvc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDI2/MjIxLzExODAzNzA4/NWJkM2RiZWNhNjY1/NWQxM2E0MTgyZTMy/ZWUxMDdmYTJkZDUy/NzZkZWI5MTMwYjkx/NWJjNGIzZjc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 79,
                title: "Stardew Valley",
                category: "rpg",
                steamPrice: 39.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/lbkq-15PPU7qOTMdQ66eyS4Uc22txwYUSgPbDbVagYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvMmQt/c3RhcmRldy12YWxs/ZXktZmFybS1sYW5k/c2NhcGUtd3J6M2l0/YWJiMjBiN2VjNy5q/cGc",
                requirements: {
                    "Sistema Operacional": "Windows 7",
                    "Processador": "2.0 Ghz Intel",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "256 MB video memory",
                    "DirectX": "Versão 10",
                    "Armazenamento": "500 MB disponíveis"
                }
            },
            {
                id: 80,
                title: "Sifu",
                category: "acao",
                steamPrice: 139.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/YT2b0uhr1Umoi76OslSvUGRtg5Qo0esQqA0jjo-3jr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvc3RvcmUvc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDUw/ODM3LzIyMWQxOGMx/OTdmOTU0ZWQzZGU2/YjhjNGM2MDJiMjQw/YjY1ZWMxMDVlZjky/ZGUzNGFhODlkY2Yw/Yjc1YTM5NzU",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-3470 / AMD FX-4350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 670 / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "22 GB disponíveis"
                }
            },
            {
                id: 81,
                title: "Schedule I",
                category: "terror",
                steamPrice: 79.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/dzN8q_Je5FFBv1a3JMapBiSPTGJOx-zY6IfetnYTaOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubGFnb2Zhc3Qu/Y29tL3dlYnNpdGUv/aW1hZ2UvMTc0MzA0/MjYwMTg1ODUyNTUu/d2VicA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2400 / AMD FX-6300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
                    "DirectX": "Versão 11",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 82,
                title: "Resident Evil 4 (2005)",
                category: "terror",
                steamPrice: 69.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/qweisMnr7ZavEbMiqUv0SpEzGyw6DWx690dsl2jbLHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGF1bmNoYm94/LWFwcC5jb20vODVm/YTNhZDctZjRmNy00/YjY2LWE5YmMtYTk3/MDQxNWZjNjIyLmpw/Zw",
                requirements: {
                    "Sistema Operacional": "Windows XP",
                    "Processador": "Pentium 4 1.4 GHz",
                    "Memória": "256 MB RAM",
                    "Placa de vídeo": "DirectX 9.0c",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "7 GB disponíveis"
                }
            },
            // NOVOS JOGOS ADICIONADOS AQUI
            {
                id: 83,
                title: "Dead by Daylight",
                category: "terror",
                steamPrice: 59.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/Fg4g8tFgusr9pGX2shZuK-CszGDaRYRWP1ApNtRvNnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmVwaWNnYW1lcy5j/b20vc3B0LWFzc2V0/cy8yYjIyOTliZThh/ZTg0ZDY3OWQ0ZGM1/N2M1NWFmMTUxMC9k/ZWFkLWJ5LWRheWxp/Z2h0LWJmZjJ1Lmpw/Zz9yZXNpemU9MSZ3/PTQ4MCZoPTI3MCZx/dWFsaXR5PW1lZGl1/bQ",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i3-4170 / AMD FX-8120",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "DX11 Compatible GeForce GTX 460 1GB / AMD HD 6850 1GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 84,
                title: "The Evil Within 2",
                category: "terror",
                steamPrice: 99.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/w2wqe2zg3aenua1pxWlLTOoE9PSbj5-pjwSY7m2i97o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MTIvMjEvdGhlLWV2/aWwtd2l0aGluLTIt/YnV0dG9uLWZpbi0x/NjQwMDQ3NTY3NTY5/LmpwZz9jcm9wPTE6/MSxzbWFydCZmb3Jt/YXQ9anBnJmF1dG89/d2VicCZxdWFsaXR5/PTgw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i7-4770 / AMD Ryzen 5 1600X",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 1060 6GB / AMD RX 480 4GB",
                    "DirectX": "Versão 11",
                    "Armazenamento": "40 GB disponíveis"
                }
            },
            {
                id: 85,
                title: "The Evil Within",
                category: "terror",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/u51OMRy7xiIrJG6Tzi1eqE-R6eFXi5sy8B-WPOdt67o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MTIvMjEvdGhlLWV2/aWwtd2l0aGluLTEt/YnV0dG9uLWZpbi0x/NjQwMDQ3NTkwNTEx/LmpwZz9jcm9wPTE6/MSxzbWFydCZmb3Jt/YXQ9anBnJmF1dG89/d2VicCZxdWFsaXR5/PTgw",
                requirements: {
                    "Sistema Operacional": "Windows 7/8.1 64-bit",
                    "Processador": "i7 or an equivalent with four plus core processor",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "GeForce GTX 460 / AMD Radeon HD 5850",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 86,
                title: "Need for Speed™ Heat",
                category: "corrida",
                steamPrice: 119.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/E3lMSW53UVzAEKTWHwQhXB0M7_ffn7-I2kv-VnzfiBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDkvbmVl/ZC1mb3Itc3BlZWQt/aGVhdC1jYXBhLTMx/MHgzMTAuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "FX-6350 or Core i5-3570",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "AMD Radeon 7970/Radeon R9 280x or NVIDIA GeForce GTX 760",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 87,
                title: "The Forest",
                category: "terror",
                steamPrice: 59.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/bOrpxN7Qbj_gDNOoT9Y8rRmB6GhbBQbFSWJYo_D2XHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGl2/ZWFxdWkuY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEyL2NvbnRhaW5l/ci1jYXBhLWhvbWUt/VGhlLUZvcmVzdC1j/b3BpYXItMzAweDMw/MC53ZWJw",
                requirements: {
                    "Sistema Operacional": "Windows 7",
                    "Processador": "Intel Dual-Core 2.4 GHz",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce 8800GT",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "5 GB disponíveis"
                }
            },
            {
                id: 88,
                title: "F1® Manager 2023",
                category: "esportes",
                steamPrice: 99.90,
                ourPrice: 24.90,
                image: "https://imgs.search.brave.com/I9WmPOOZK24gIUifVrtqwksr50qtPte4mhQOvTM8g80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDcvZjEt/bWFuYWdlci0yMDIz/LWNhcGEtMzEweDMx/MC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4590 / AMD FX-8370",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
                    "DirectX": "Versão 12",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 89,
                title: "F1® Manager 2022",
                category: "esportes",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/h6UDV2kROOuItrq3-qJH4S3VXr_0hoVGiknbLYZ2ybs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zZXJ2aWNlLnph/b25jZS5uZXQvZXlK/aWRXTnJaWFFpT2lK/bWNtOXVkR2xsY2kx/amJYTWlMQ0pyWlhr/aU9pSXlNREl6TFRB/eEwzWnZiSFJoWDJW/d2FXTmZjM1J2Y21W/ZllYTnpaWFJ6WHpJ/d01qSmZiRzluYjE5/MWNHUmhkR1ZmWkdW/emEzUnZjRjlvYjNK/cGVtOXVkR0ZzWDJO/aGNtOTFjMlZzWDJs/dFlXZGxYekU1TWpC/NE1UQTRNQzVxY0dj/aUxDSmxaR2wwY3lJ/NmV5SnlaWE5wZW1V/aU9uc2lkMmxrZEdn/aU9qWTBNSDE5ZlE9/PQ",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-4590 / AMD FX-8370",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570",
                    "DirectX": "Versão 12",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 90,
                title: "F1® 2021",
                category: "corrida",
                steamPrice: 69.90,
                ourPrice: 17.90,
                image: "https://imgs.search.brave.com/LrkNmwOip_SO1w0L4DPSebWUuaX5C1HJsgD_Dc_uH-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdw/cm94eS5lbmViYS5n/YW1lcy9aRXVjRXM2/ZXZNSzNSeHZZajZU/eGRabF9LeU90MG42/SzBnc1lVRFVxeUFR/L3JzOmZpdDozNTAv/YXI6MS9jek02THk5/d2NtOWtkV04wL2N5/NWxibVZpWVM1bllX/MWwvY3k5d2NtOWtk/V04wY3k5Uy9kVzFw/ZGt0VGEwOU5PVkpX/L1JHdDFibkV3UlRG/M1NGSXQvVkRsQk5Y/QkZXbTl1UXpKUC9S/RXd0WHpGQkxtcHda/V2M",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i3-2130 / AMD FX 4300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 950 / AMD R9 280",
                    "DirectX": "Versão 12",
                    "Armazenamento": "80 GB disponíveis"
                }
            },
            {
                id: 91,
                title: "F1® 2020",
                category: "corrida",
                steamPrice: 59.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/FZWu7cbZqe1lPrOP1IWTCvRapxxNDBNw0IkxE3Colfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZzJhLmNvbS80/NzB4Mjc2LzF4MXgw/L2YxLTIwMjAtc3Rh/bmRhcmQtZWRpdGlv/bi1wYy1zdGVhbS1r/ZXktZ2xvYmFsLWkx/MDAwMDE5NTEwNzAz/My81ZjRmNjE0ZTdl/Njk2YzRlNDczMmFj/ZDI",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i3-2130 / AMD FX 4300",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 950 / AMD R9 280",
                    "DirectX": "Versão 12",
                    "Armazenamento": "80 GB disponíveis"
                }
            },
            {
                id: 92,
                title: "HITMAN World of Assassination",
                category: "acao",
                steamPrice: 49.90,
                ourPrice: 14.90,
                image: "https://imgs.search.brave.com/VNdMC1aDyRc5O2dlvBrhcS9RSwcbkDKJymoSXj_6TRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDcvaGl0/bWFuLXdvcmxkLW9m/LWFzc2Fzc2luYXRp/b24tY2FwYS0zMTB4/MzEwLmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD Phenom II X4 940",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 770 / AMD Radeon R9 290",
                    "DirectX": "Versão 12",
                    "Armazenamento": "150 GB disponíveis"
                }
            },
            {
                id: 93,
                title: "Hitman: Absolution™",
                category: "acao",
                steamPrice: 49.90,
                ourPrice: 14.90,
                image: "https://imgs.search.brave.com/RwDaRnH0U4QtnP8v-f-7OBHuw5z42BcnbmAM0HS5uf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oeXBl/LmdhbWVzL19uZXh0/L2ltYWdlP3VybD1o/dHRwczovL2ltZy5o/eXBlLmdhbWVzL2Nk/bi8wODdmNjc2Yi0w/OGFiLTQwOTAtODZm/ZC1jYzE4NWUzYzVh/NDFDT1ZFUi0tW05l/eHdheV0tSGl0bWFu/LUFic29sdXRpb24u/anBnJnc9NzUwJnE9/NzU",
                requirements: {
                    "Sistema Operacional": "Windows 7",
                    "Processador": "True dual core CPU",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 450 / ATI Radeon HD 4650",
                    "DirectX": "Versão 10",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 94,
                title: "Mafia III: Definitive Edition",
                category: "acao",
                steamPrice: 99.90,
                ourPrice: 27.90,
                image: "https://imgs.search.brave.com/fOKV1ctU6pXXGKNCEyXhDlf0LO5dUqvmw9LnjfvPL_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5tWTJaamcz/TVRrdFltRmhaUzAw/TXpjMkxUZ3lZV010/T0RJd01tSTNZemho/T1dSaVhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel I5-2500K / AMD FX-8120",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "2GB of Video Memory & NVIDIA GeForce GTX 660 / AMD Radeon HD7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 95,
                title: "Mafia II: Definitive Edition",
                category: "acao",
                steamPrice: 89.90,
                ourPrice: 26.90,
                image: "https://imgs.search.brave.com/altb5jqBUPBrKyNJOikDeKq4gk0Gl2fKzeRmYfrKc70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qZzFaR05p/WWpRdFkyVm1PUzAw/WW1ZeExUa3pPVEV0/TVdNMFpqUmtPVFkw/TlRneVhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD FX-8120",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 660 / AMD Radeon HD7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 96,
                title: "Mafia: Definitive Edition",
                category: "acao",
                steamPrice: 119.90,
                ourPrice: 29.90,
                image: "https://imgs.search.brave.com/rnBcowNse62oaZaOj-cAbjt27FR5V1Y9cb6R4LfH9Mg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcHV2ZnRw/dnliNnpkMS5qcGVn",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-2500K / AMD FX-8120",
                    "Memória": "6 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 660 / AMD Radeon HD7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "50 GB disponíveis"
                }
            },
            {
                id: 97,
                title: "Dead Island Definitive Edition",
                category: "acao",
                steamPrice: 79.90,
                ourPrice: 22.90,
                image: "https://imgs.search.brave.com/6xVgH1RYZKGVYlOnZc5Dm8gM4TGbKRe5KVYcy_egbl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXZpY2lvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNC9kZWFkLWlz/bGFuZC1kZWZpbml0/aXZlLWVkaXRpb24t/Y292ZXItMDEwNzgz/LTIud2VicA",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-2500 / AMD FX-8320",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 560 Ti / AMD Radeon HD 6870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "25 GB disponíveis"
                }
            },
            {
                id: 98,
                title: "Dead Island 2",
                category: "acao",
                steamPrice: 199.90,
                ourPrice: 34.90,
                image: "https://imgs.search.brave.com/BJacoytbH-pB2hGMHfD9CijXt0hq_Fonrr2dhekRGW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpESmxaVGd3/WXpZdE9HUTFOQzAw/WXpneUxUbG1ORGN0/TkRJMVpURTROV0po/TTJaa1hrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "AMD FX-9590 / Intel Core i7-7700K",
                    "Memória": "10 GB RAM",
                    "Placa de vídeo": "AMD Radeon RX 480 / NVIDIA GeForce GTX 1060",
                    "DirectX": "Versão 12",
                    "Armazenamento": "70 GB disponíveis"
                }
            },
            {
                id: 99,
                title: "Metro: Last Light Redux",
                category: "acao",
                steamPrice: 59.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/LRqi4PNA3pksSEXJk1JmveiZmRefJBs50avD9mrzulk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi5i/ZXN0LXdhbGxwYXBl/ci5uZXQvd2FsbHBh/cGVyLzE5MjB4MTQ0/MC8xNDA5L01ldHJv/LUxhc3QtTGlnaHQt/UmVkdXhfMTkyMHgx/NDQwLmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows Vista/7/8",
                    "Processador": "Dual core CPU (2.2+ GHz Dual Core)",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "DirectX 10, Shader Model 4 compliant graphics cards",
                    "DirectX": "Versão 10",
                    "Armazenamento": "10 GB disponíveis"
                }
            },
            {
                id: 100,
                title: "Metro 2033 Redux",
                category: "acao",
                steamPrice: 59.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/F2mDlgZiyTfQui-uttKLya446AXjI375OLNBgRhtMo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcml0/aWNhbGhpdHMuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzEyL21ldHJv/LTIwMzMtcmVkdXgt/cGxhdGluYS0wMS02/OTZ4MzI1LmpwZw",
                requirements: {
                    "Sistema Operacional": "Windows Vista/7/8",
                    "Processador": "Dual core CPU (2.2+ GHz Dual Core)",
                    "Memória": "2 GB RAM",
                    "Placa de vídeo": "DirectX 10, Shader Model 4 compliant graphics cards",
                    "DirectX": "Versão 10",
                    "Armazenamento": "10 GB disponíveis"
                }
            },
            {
                id: 101,
                title: "Fallout 4",
                category: "rpg",
                steamPrice: 49.90,
                ourPrice: 14.90,
                image: "https://imgs.search.brave.com/VtiOvny3uJ1dh8BYlYl5UugM2D7M64zO-m6t9GDIcVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MTIvMDcvZmFsbG91/dDQtMTYzODg0MTgw/NjM0Mi5wbmc_Y3Jv/cD0xOjEsc21hcnQm/Zm9ybWF0PWpwZyZh/dXRvPXdlYnAmcXVh/bGl0eT04MA",
                requirements: {
                    "Sistema Operacional": "Windows 7/8/10 64-bit",
                    "Processador": "Intel Core i5-2300 / AMD Phenom II X4 945",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 550 Ti 2GB / AMD Radeon HD 7870",
                    "DirectX": "Versão 11",
                    "Armazenamento": "30 GB disponíveis"
                }
            },
            {
                id: 102,
                title: "Fallout 76",
                category: "rpg",
                steamPrice: 59.90,
                ourPrice: 16.90,
                image: "https://imgs.search.brave.com/M9tbupB4Bg73bZIYDDcMtHxp8djTNr8Kwj4USnc8lOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Zh/bGxvdXQvaW1hZ2Vz/LzAvMDAvRmFsbG91/dF83Nl9ib3hfY292/ZXIuanBnL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0/aC1kb3duLzI2OD9j/Yj0yMDIxMTIxMzE4/MTQwMg",
                requirements: {
                    "Sistema Operacional": "Windows 10 64-bit",
                    "Processador": "Intel Core i5-6600k / AMD Ryzen 3 1300X",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GTX 780 3GB / AMD Radeon R9 285",
                    "DirectX": "Versão 12",
                    "Armazenamento": "70 GB disponíveis"
                }
            },
            {
                id: 103,
                title: "Saint Seiya: Soldiers' Soul",
                category: "acao",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/O0NAFYOzHX5eGnePSiIbEC-5m5mh8H_oikMLaB1PmxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/ZG9lcy1hbnlvbmUt/YWN0dWFsbHkta25v/dy1vci1yZW1lbWJl/ci1zYWludC1zZWl5/YS1zb2xkaWVycy12/MC1rM3l1YnVybHdu/amExLmpwZz9hdXRv/PXdlYnAmcz1mM2U2/NmNmZjNjNWU4MzQ0/OGFjYzQ5OWUxM2Jj/MzJjNzA3YTk0MDBj",
                requirements: {
                    "Sistema Operacional": "Windows 7/8/8.1",
                    "Processador": "Intel Core i3-2100 / AMD A8-5600K",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 450 / AMD Radeon HD 5770",
                    "DirectX": "Versão 11",
                    "Armazenamento": "15 GB disponíveis"
                }
            },
            {
                id: 104,
                title: "Valheim",
                category: "aventura",
                steamPrice: 39.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/TCNsAwfY44oKYRJn7AJocGjFSkv466QVhqZ-Rp0-Bas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZzJhLmNvbS91/aWFkbWluaW1hZ2Vz/LzE3MHgyMjYvMXgx/eDAvdmFsaGVpbS1w/Yy82MDE3YzE0NTdl/Njk2YzQyYzU0Y2Q1/YTI",
                requirements: {
                    "Sistema Operacional": "Windows 7 64-bit",
                    "Processador": "2.6 GHz Quad Core or similar",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "GeForce GTX 950 or Radeon HD 7970",
                    "DirectX": "Versão 11",
                    "Armazenamento": "1 GB disponíveis"
                }
            },
            {
                id: 105,
                title: "ULTRAKILL",
                category: "acao",
                steamPrice: 39.90,
                ourPrice: 14.90,
                image: "https://imgs.search.brave.com/_f3PVHmsEZ0I-0RCM63U4IUl4JileghEHPnljHuGnBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pdGVt/cy5nb2cuY29tL3Vs/dHJha2lsbC91bHRy/YWtpbGwuanBn",
                requirements: {
                    "Sistema Operacional": "Windows 7 or later",
                    "Processador": "2.4GHz Dual Core",
                    "Memória": "4 GB RAM",
                    "Placa de vídeo": "GeForce 9800GTX+",
                    "DirectX": "Versão 9.0c",
                    "Armazenamento": "2 GB disponíveis"
                }
            },
            {
                id: 106,
                title: "FIVE NIGHTS AT FREDDY'S: HELP WANTED",
                category: "terror",
                steamPrice: 79.90,
                ourPrice: 19.90,
                image: "https://imgs.search.brave.com/2S7afJ7KovSKw6u_IC4Wh-A7iJsu4bwrH-t3HLn4uzo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9Ua3lZV05q/TVRndE0ySmhZUzAw/TnpFd0xUZzBaakF0/TlRKalptSmhaVEZo/WlRJMVhrRXlYa0Zx/Y0djQC5qcGc",
                requirements: {
                    "Sistema Operacional": "Windows 10",
                    "Processador": "Intel Core i5-4590 / AMD FX 8350",
                    "Memória": "8 GB RAM",
                    "Placa de vídeo": "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
                    "DirectX": "Versão 11",
                    "Armazenamento": "10 GB disponíveis"
                }
            },
    {
        id: 107,
        title: "Sons Of The Forest",
        category: "terror",
        steamPrice: 79.90,
        ourPrice: 19.90,
        image: "https://imgs.search.brave.com/JUjHY-Zo5HjywOtT2stk5fdbB-YBQBMwin-_XwyXQYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxsa2V5c2hvcC5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvU29ucy1vZi10/aGUtRm9yZXN0LUVh/cmx5LUFjY2Vzcy1T/dGVhbS1SYXRpbmdf/ZmVhdHVyZWQucG5n",
        requirements: {
            "Sistema Operacional": "Windows 10 64-bit",
            "Processador": "Intel Core i7-4790K / AMD Ryzen 5 1600",
            "Memória": "16 GB RAM",
            "Placa de vídeo": "NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT",
            "DirectX": "Versão 11",
            "Armazenamento": "20 GB disponíveis"
        }
    },
    {
        id: 108,
        title: "TESTE",
        category: "terror",
        steamPrice: 999.90,
        ourPrice: 0.01,
        image: "https://images.tcdn.com.br/img/img_prod/606732/produto_teste_3919_1_85010fa0e84b19ffcfe78386f6f702cd_20240903120335.jpg",
        requirements: {
            "Sistema Operacional": "Windows 10 64-bit",
            "Processador": "Intel Core i7-4790K / AMD Ryzen 5 1600",
            "Memória": "16 GB RAM",
            "Placa de vídeo": "NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT",
            "DirectX": "Versão 11",
            "Armazenamento": "20 GB disponíveis"
        }
    }
    ];

window.gamesData = gamesData;

const CATEGORY_ORDER = ['acao', 'terror', 'aventura', 'rpg', 'corrida', 'esportes'];
const CATEGORY_LABELS = {
  acao: 'Ação',
  terror: 'Terror',
  aventura: 'Aventura',
  rpg: 'RPG',
  corrida: 'Corrida',
  esportes: 'Esportes'
};
const SUPPORT_SHARE_BASE = window.STORE_CONFIG?.discordUrl || 'https://discord.com/app';
const HIDDEN_TITLES = new Set(['TESTE']);

const catalogRoot = document.getElementById('catalogRoot');
const resultsInfo = document.getElementById('resultsInfo');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterPills = document.getElementById('filterPills');
const productOverlay = document.getElementById('productOverlay');
const productModalBody = document.getElementById('productModalBody');
const closeProductModalBtn = document.getElementById('closeProductModal');
const loginToggleBtn = document.getElementById('loginToggleBtn');
const loginMenu = document.getElementById('loginMenu');
const toastWrap = document.getElementById('toastWrap');
const metricProducts = document.getElementById('metricProducts');
const heroSpotlight = document.getElementById('heroSpotlight');

const state = {
  query: '',
  activeProductId: null,
  featuredId: null,
  category: 'all',
  sort: 'featured'
};

function isVisibleGame(game) {
  if (!game || HIDDEN_TITLES.has(String(game.title || '').trim())) return false;
  return true;
}

function getCatalogGames() {
  return gamesData.filter(isVisibleGame);
}

function applyDirectImages() {
  const directImages = window.GAME_DIRECT_IMAGES || {};
  gamesData.forEach(game => {
    const direct = directImages[game.title];
    if (direct?.image) {
      game.image = direct.image;
    }
  });
}

function normalizeGames() {
  applyDirectImages();

  gamesData.forEach(game => {
    game.discount = calculateDiscount(game.steamPrice, game.ourPrice);
  });

  const featured = [...getCatalogGames()].sort(getSortComparator('featured'))[0];
  state.featuredId = featured ? Number(featured.id) : null;
}

function calculateDiscount(steamPrice, ourPrice) {
  if (!steamPrice || !ourPrice || Number(ourPrice) >= Number(steamPrice)) return 0;
  return Math.round(((Number(steamPrice) - Number(ourPrice)) / Number(steamPrice)) * 100);
}

function formatPrice(value) {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function truncateText(value, maxLength = 120) {
  const text = String(value || '');
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}…`;
}

function getCategoryLabel(category) {
  return CATEGORY_LABELS[category] || 'Jogos';
}

function getCategoryIcon(category) {
  const map = {
    acao: 'fa-bolt',
    terror: 'fa-skull',
    aventura: 'fa-compass',
    rpg: 'fa-hat-wizard',
    corrida: 'fa-flag-checkered',
    esportes: 'fa-futbol'
  };
  return map[category] || 'fa-gamepad';
}

function getGameById(id) {
  return gamesData.find(game => Number(game.id) === Number(id));
}

function getGameBadge(game) {
  if (Number(game.discount || 0) >= 85) return 'Oferta forte';
  if (Number(game.discount || 0) >= 70) return 'Mais vendido';
  if (Number(game.ourPrice || 0) <= 19.9) return 'Custo-benefício';
  return 'Destaque';
}

function getInfoImageTabLabel(rawLabel) {
  const label = normalizeText(rawLabel);

  if (label.includes('cover')) return 'Capa';
  if (label.includes('screenshot')) return 'Gameplay';
  if (label.includes('key art')) return 'Key Art';
  if (label.includes('wallpaper')) return 'Wallpaper';
  if (label.includes('logo')) return 'Logo';

  return rawLabel;
}

function getInfoImageTabs(game) {
  const sourceMap = window.GAME_INFO_IMAGE_LINKS?.[game.title];
  if (!sourceMap) return [];

  const desiredOrder = ['Capa', 'Gameplay', 'Key Art', 'Wallpaper', 'Logo'];

  return Object.entries(sourceMap)
    .map(([label, url]) => ({
      label: getInfoImageTabLabel(label),
      fullLabel: label,
      url
    }))
    .sort((a, b) => {
      const aIndex = desiredOrder.indexOf(a.label);
      const bIndex = desiredOrder.indexOf(b.label);
      const safeA = aIndex === -1 ? 999 : aIndex;
      const safeB = bIndex === -1 ? 999 : bIndex;

      if (safeA !== safeB) return safeA - safeB;
      return String(a.fullLabel || '').localeCompare(String(b.fullLabel || ''), 'pt-BR');
    });
}

function getFeaturedGame(preferredList = []) {
  if (Array.isArray(preferredList) && preferredList.length) {
    const preferredById = preferredList.find(game => Number(game.id) === Number(state.featuredId));
    return preferredById || preferredList[0];
  }

  if (state.featuredId != null) {
    const byId = getGameById(state.featuredId);
    if (byId && isVisibleGame(byId)) return byId;
  }

  return getCatalogGames()[0] || null;
}

function getGameSummary(game) {
  const templates = {
    acao: `${game.title} é focado em combate direto, ritmo forte e impacto visual constante para quem quer ação sem enrolação.`,
    terror: `${game.title} entrega tensão, atmosfera pesada e uma experiência intensa para quem curte pressão e suspense.`,
    aventura: `${game.title} mistura exploração, progressão e descoberta com sensação clara de evolução durante a jornada.`,
    rpg: `${game.title} é ideal para quem quer evolução, construção de personagem e muitas horas de conteúdo.`,
    corrida: `${game.title} foi feito para velocidade, reflexo e partidas com foco total em desempenho.`,
    esportes: `${game.title} traz competitividade, partidas dinâmicas e gameplay direto ligado ao universo esportivo.`
  };
  return templates[game.category] || `${game.title} é um produto digital com entrega via suporte e requisitos já listados.`;
}

function getProductInfo(game) {
  return [
    { label: 'Categoria', value: getCategoryLabel(game.category) },
    { label: 'Formato', value: 'Produto digital' },
    { label: 'Entrega', value: 'Assistida após confirmação' },
    { label: 'Ativação', value: 'Fluxo orientado pelo suporte' },
    { label: 'Preço base', value: game.steamPrice ? formatPrice(game.steamPrice) : 'Sob consulta' },
    { label: 'Seu valor', value: formatPrice(game.ourPrice) }
  ];
}

function getSortComparator(mode = state.sort) {
  if (mode === 'price-asc') {
    return (a, b) => Number(a.ourPrice || 0) - Number(b.ourPrice || 0)
      || Number(b.discount || 0) - Number(a.discount || 0)
      || String(a.title || '').localeCompare(String(b.title || ''), 'pt-BR');
  }

  if (mode === 'price-desc') {
    return (a, b) => Number(b.ourPrice || 0) - Number(a.ourPrice || 0)
      || Number(b.discount || 0) - Number(a.discount || 0)
      || String(a.title || '').localeCompare(String(b.title || ''), 'pt-BR');
  }

  if (mode === 'name') {
    return (a, b) => String(a.title || '').localeCompare(String(b.title || ''), 'pt-BR');
  }

  return (a, b) => Number(b.discount || 0) - Number(a.discount || 0)
    || Number(a.ourPrice || 0) - Number(b.ourPrice || 0)
    || String(a.title || '').localeCompare(String(b.title || ''), 'pt-BR');
}

function filterGames() {
  const query = normalizeText(state.query);
  let list = [...getCatalogGames()];

  if (state.category !== 'all') {
    list = list.filter(game => game.category === state.category);
  }

  if (query) {
    list = list.filter(game => {
      const haystack = [
        game.title,
        getCategoryLabel(game.category),
        game.category,
        getGameSummary(game),
        getGameBadge(game),
        'produto digital',
        'entrega assistida'
      ].map(normalizeText).join(' ');
      return haystack.includes(query);
    });
  }

  return list.sort(getSortComparator());
}

function groupGames(list) {
  if (state.category !== 'all') {
    return [{
      key: state.category,
      title: getCategoryLabel(state.category),
      icon: getCategoryIcon(state.category),
      items: list
    }];
  }

  const groups = CATEGORY_ORDER.map(category => {
    const items = list.filter(game => game.category === category);
    return {
      key: category,
      title: getCategoryLabel(category),
      icon: getCategoryIcon(category),
      items
    };
  }).filter(group => group.items.length > 0);

  const leftovers = list.filter(game => !CATEGORY_ORDER.includes(game.category));
  if (leftovers.length) {
    groups.push({
      key: 'outros',
      title: 'Outros',
      icon: 'fa-gamepad',
      items: leftovers
    });
  }

  return groups;
}

function renderHero(currentList = []) {
  if (!heroSpotlight) return;

  const featured = getFeaturedGame(currentList);
  if (!featured) {
    heroSpotlight.innerHTML = '';
    return;
  }

  heroSpotlight.innerHTML = `
    <div class="spotlight-card">
      <div class="spotlight-media">
        <img src="${escapeHtml(featured.image)}" alt="${escapeHtml(featured.title)}" loading="lazy">
      </div>

      <div class="spotlight-body">
        <div class="spotlight-label-row">
          <span class="spotlight-badge">Em destaque</span>
          ${featured.discount > 0 ? `<span class="spotlight-discount">-${featured.discount}%</span>` : ''}
        </div>

        <div class="spotlight-category">${escapeHtml(getCategoryLabel(featured.category))}</div>
        <h2>${escapeHtml(featured.title)}</h2>
        <p>${escapeHtml(getGameSummary(featured))}</p>

        <div class="spotlight-meta-list">
          <span><i class="fa-solid fa-bag-shopping"></i> Produto digital</span>
          <span><i class="fa-solid fa-shield-halved"></i> Fluxo seguro</span>
          <span><i class="fa-solid fa-headset"></i> Compra assistida</span>
        </div>

        <div class="spotlight-price">
          <span class="spotlight-old">${featured.steamPrice ? formatPrice(featured.steamPrice) : 'Sem preço base'}</span>
          <strong>${formatPrice(featured.ourPrice)}</strong>
        </div>

        <div class="spotlight-actions">
          <button class="primary-btn" type="button" data-hero-open="${featured.id}">
            <i class="fa-solid fa-circle-info"></i> Ver detalhes
          </button>
          <button class="secondary-btn" type="button" data-hero-add="${featured.id}">
            <i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFilterState() {
  filterPills?.querySelectorAll('.filter-pill').forEach(button => {
    button.classList.toggle('active', button.dataset.filter === state.category);
  });

  if (sortSelect) {
    sortSelect.value = state.sort;
  }
}

function renderCatalog() {
  const filtered = filterGames();
  const groups = groupGames(filtered);
  const visibleTotal = getCatalogGames().length;

  if (metricProducts) {
    metricProducts.textContent = String(visibleTotal);
  }

  renderHero(filtered);
  renderFilterState();

  const baseInfo = state.query
    ? `${filtered.length} resultado(s) para "${state.query}"`
    : `${filtered.length} jogo(s) exibido(s)`;

  const categoryInfo = state.category !== 'all'
    ? ` • ${getCategoryLabel(state.category)}`
    : '';

  resultsInfo.textContent = `${baseInfo}${categoryInfo}`;

  if (!filtered.length) {
    catalogRoot.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>Nenhum jogo encontrado</h3>
        <p>Tente outro nome, outra categoria ou remova parte do texto da pesquisa.</p>
      </div>
    `;
    return;
  }

  catalogRoot.innerHTML = groups.map(group => `
    <section class="catalog-section shelf shelf-${group.key}">
      <div class="shelf-head">
        <div class="shelf-title">
          <i class="fa-solid ${group.icon}"></i>
          <span>${escapeHtml(group.title)}</span>
        </div>
        <div class="shelf-count">${group.items.length} item(ns)</div>
      </div>

      <div class="shelf-track">
        ${group.items.map(renderCard).join('')}
      </div>
    </section>
  `).join('');
}

function renderCard(game) {
  return `
    <article class="game-card" data-game-id="${game.id}" tabindex="0" role="button" aria-label="Abrir detalhes de ${escapeHtml(game.title)}">
      <div class="card-media">
        <img src="${escapeHtml(game.image)}" alt="${escapeHtml(game.title)}" loading="lazy">
        <div class="card-media-gradient"></div>
        <div class="card-top-tags">
          <span class="card-tag">${escapeHtml(getCategoryLabel(game.category))}</span>
          ${game.discount > 0 ? `<span class="card-tag card-tag-accent">-${game.discount}%</span>` : ''}
        </div>
      </div>

      <div class="card-body">
        <div class="card-overline">${escapeHtml(getGameBadge(game))}</div>
        <h3 class="card-title">${escapeHtml(game.title)}</h3>
        <p class="card-summary">${escapeHtml(truncateText(getGameSummary(game), 118))}</p>

        <div class="card-meta-row">
          <span><i class="fa-solid fa-bolt"></i> Entrega digital</span>
          <span><i class="fa-solid fa-headset"></i> Suporte</span>
        </div>

        <div class="price-row">
          <span class="price-old">${game.steamPrice ? formatPrice(game.steamPrice) : 'Sem preço base'}</span>
          <span class="price-now">${formatPrice(game.ourPrice)}</span>
        </div>

        <div class="card-footer">
          <button class="card-info-trigger" type="button" data-game-id="${game.id}">
            <i class="fa-solid fa-circle-info"></i>
            <span>Detalhes</span>
          </button>

          <button class="card-open" type="button" data-add-cart-id="${game.id}">
            <i class="fa-solid fa-cart-plus"></i>
            <span>Adicionar</span>
          </button>
        </div>

        <div class="card-click-hint">Clique em qualquer área do card para abrir rápido.</div>
      </div>
    </article>
  `;
}

function openProductModal(gameId) {
  const game = getGameById(gameId);
  if (!game || !isVisibleGame(game)) return;

  state.activeProductId = Number(game.id);

  const requirements = Object.entries(game.requirements || {})
    .map(([label, value]) => `
      <div class="requirements-item">
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(value)}</span>
      </div>
    `).join('');

  const infoCards = getProductInfo(game)
    .map(info => `
      <div class="info-card">
        <div class="info-card-label">${escapeHtml(info.label)}</div>
        <div class="info-card-value">${escapeHtml(info.value)}</div>
      </div>
    `).join('');

  const imageTabs = getInfoImageTabs(game);
  const infoImageTabs = imageTabs.length
    ? `
      <div class="info-image-tabs" aria-label="Referências visuais externas">
        ${imageTabs.map(tab => `
          <a
            class="info-image-tab"
            href="${escapeHtml(tab.url)}"
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir ${escapeHtml(tab.fullLabel)}"
            aria-label="Abrir ${escapeHtml(tab.fullLabel)}"
          >
            ${escapeHtml(tab.label)}
          </a>
        `).join('')}
      </div>
      <p class="info-image-note">Referências externas para capa, gameplay e artes do jogo.</p>
    `
    : '';

  productModalBody.innerHTML = `
    <div class="product-layout">
      <div class="product-media-stack">
        <div class="product-cover">
          <img src="${escapeHtml(game.image)}" alt="${escapeHtml(game.title)}">
        </div>
        ${infoImageTabs}
      </div>

      <div class="product-content">
        <div class="product-top">
          <div class="modal-badges">
            <span class="badge">${escapeHtml(getCategoryLabel(game.category))}</span>
            <span class="badge">Produto digital</span>
            ${game.discount > 0 ? `<span class="badge badge-accent">Desconto de ${game.discount}%</span>` : ''}
          </div>

          <h2>${escapeHtml(game.title)}</h2>

          <div class="price-box">
            <span class="price-old">${game.steamPrice ? formatPrice(game.steamPrice) : 'Sem preço base'}</span>
            <span class="price-now">${formatPrice(game.ourPrice)}</span>
          </div>

          <p class="product-summary">${escapeHtml(getGameSummary(game))}</p>

          <div class="support-box">
            <h4><i class="fa-solid fa-headset"></i> Fluxo de compra assistido</h4>
            <p>O cliente recebe um processo mais claro: seleção do jogo, resumo automático do pedido e acompanhamento no atendimento até a finalização.</p>
          </div>
        </div>

        <div class="info-grid">
          ${infoCards}
        </div>

        <div class="requirements-box">
          <h4><i class="fa-solid fa-microchip"></i> Requisitos do sistema</h4>
          <div class="requirements-list">
            ${requirements || '<p class="product-summary">Nenhum requisito cadastrado para este item.</p>'}
          </div>
        </div>

        <div class="modal-actions">
          <button class="primary-btn" type="button" id="modalAddToCart" data-game-id="${game.id}">
            <i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho
          </button>
          <button class="secondary-btn" type="button" id="modalCloseAction">
            <i class="fa-solid fa-arrow-left"></i> Voltar
          </button>
        </div>
      </div>
    </div>
  `;

  productOverlay.classList.add('active');
  productOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
}

function closeProductModal() {
  if (!productOverlay?.classList.contains('active')) return;

  productOverlay.classList.remove('active');
  productOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
}

function showToast(title, text = 'Ação concluída.') {
  if (!toastWrap) return;

  const item = document.createElement('div');
  item.className = 'toast';
  item.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <div>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(text)}</span>
    </div>
  `;
  toastWrap.appendChild(item);
  setTimeout(() => item.remove(), 2800);
}

function closeLoginMenu() {
  if (!loginToggleBtn || !loginMenu) return;
  loginToggleBtn.setAttribute('aria-expanded', 'false');
  loginMenu.setAttribute('aria-hidden', 'true');
  loginMenu.classList.remove('active');
}

function bindEvents() {
  searchInput?.addEventListener('input', event => {
    state.query = event.target.value.trim();
    renderCatalog();
  });

  sortSelect?.addEventListener('change', event => {
    state.sort = event.target.value || 'featured';
    renderCatalog();
  });

  filterPills?.addEventListener('click', event => {
    const filterButton = event.target.closest('.filter-pill');
    if (!filterButton) return;

    state.category = filterButton.dataset.filter || 'all';
    renderCatalog();
  });

  loginToggleBtn?.addEventListener('click', event => {
    event.stopPropagation();
    const isActive = loginMenu.classList.toggle('active');
    loginToggleBtn.setAttribute('aria-expanded', String(isActive));
    loginMenu.setAttribute('aria-hidden', String(!isActive));
  });

  loginMenu?.addEventListener('click', event => {
    event.stopPropagation();
    closeLoginMenu();
  });

  heroSpotlight?.addEventListener('click', event => {
    const openBtn = event.target.closest('[data-hero-open]');
    if (openBtn) {
      openProductModal(openBtn.dataset.heroOpen);
      return;
    }

    const addBtn = event.target.closest('[data-hero-add]');
    if (addBtn) {
      window.CartApp?.add(addBtn.dataset.heroAdd);
    }
  });

  catalogRoot?.addEventListener('click', event => {
    const infoButton = event.target.closest('.card-info-trigger');
    if (infoButton) {
      event.preventDefault();
      event.stopPropagation();
      openProductModal(infoButton.dataset.gameId);
      return;
    }

    const addToCartButton = event.target.closest('.card-open');
    if (addToCartButton) {
      event.preventDefault();
      event.stopPropagation();
      window.CartApp?.add(addToCartButton.dataset.addCartId);
      return;
    }

    const card = event.target.closest('.game-card');
    if (card) {
      openProductModal(card.dataset.gameId);
    }
  });

  catalogRoot?.addEventListener('keydown', event => {
    const card = event.target.closest('.game-card');
    if (!card) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProductModal(card.dataset.gameId);
    }
  });

  closeProductModalBtn?.addEventListener('click', closeProductModal);

  productOverlay?.addEventListener('click', event => {
    if (event.target === productOverlay) {
      closeProductModal();
    }
  });

  productModalBody?.addEventListener('click', event => {
    const addBtn = event.target.closest('#modalAddToCart');
    if (addBtn) {
      window.CartApp?.add(addBtn.dataset.gameId);
      return;
    }

    if (event.target.closest('#modalCloseAction')) {
      closeProductModal();
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.login-wrap')) {
      closeLoginMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeProductModal();
      window.CartApp?.close();
      closeLoginMenu();
    }
  });
}

function buildSupportUrl() {
  return SUPPORT_SHARE_BASE;
}

function init() {
  normalizeGames();
  renderCatalog();
  bindEvents();
}

window.StoreUI = {
  formatPrice,
  showToast,
  getGameById,
  closeProductModal,
  escapeHtml,
  buildSupportUrl
};

init();
