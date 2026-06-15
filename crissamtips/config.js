/**
 * CRISSAM TIPS — Arquivo de configuração central
 * Edite aqui para alterar textos, cores, links e notificações.
 */
const pageConfig = {
  brand: {
    name:               "CRISSAM TIPS",
    logo:               "images/logo.png",
    logoAlt:            "Logo da CRISSAM TIPS",
    primaryColor:       "#A6FF3D",
    primaryHoverColor:  "#93EB2E",
    backgroundColor:    "#071108",
    surfaceColor:       "#102414",
    textColor:          "#FFFFFF",
    secondaryTextColor: "#B7C4B9",
    borderColor:        "rgba(166,255,61,0.20)"
  },

  content: {
    badge:           "⚡ CANAL EXCLUSIVO — VAGAS LIMITADAS",
    headline:        "QUEM ESTÁ DENTRO JÁ SABE.",
    highlightedText: "VOCÊ AINDA NÃO ENTROU?",
    description:     "As melhores análises e tips chegam primeiro para quem está no canal. Cada minuto fora é uma oportunidade perdida.",
    benefits: [
      { icon: "zap",      label: "Tips em tempo real"        },
      { icon: "lock",     label: "Acesso exclusivo"          },
      { icon: "telegram", label: "Direto no seu Telegram"    }
    ]
  },

  cta: {
    text:           "QUERO ENTRAR AGORA",
    url:            "https://t.me/+431aQO7lN58xNmJh",
    openInNewTab:   true,
    supportingText: "Acesso gratuito — mas as vagas são limitadas."
  },

  notifications: {
    enabled:              true,
    showIllustrativeLabel: false,
    illustrativeLabel:    "",
    initialDelay:         1800,
    visibleDuration:      4200,
    /* Intervalos em ms — lista de pesos para simular padrão humano real:
       disparos rápidos seguidos, pausas longas, picos de movimento */
    intervals: [1200, 1800, 2400, 1500, 6000, 9000, 2100, 3200, 800, 11000, 1400, 4500, 700, 7500, 2800],
    items: [
      { name: "Lucas S.",    message: "Entrou para o Grupo!" },
      { name: "Mariana R.",  message: "Entrou para o Grupo!" },
      { name: "Rafael M.",   message: "Entrou para o Grupo!" },
      { name: "Ana P.",      message: "Entrou para o Grupo!" },
      { name: "Pedro H.",    message: "Entrou para o Grupo!" },
      { name: "Camila F.",   message: "Entrou para o Grupo!" },
      { name: "Thiago L.",   message: "Entrou para o Grupo!" },
      { name: "Juliana C.",  message: "Entrou para o Grupo!" },
      { name: "Bruno K.",    message: "Entrou para o Grupo!" },
      { name: "Fernanda O.", message: "Entrou para o Grupo!" }
    ]
  },

  urgency: {
    enabled: true,
    spotsLeft: 286,
    spotsTotal: 500,
    label: "vagas restantes"
  },

  disclaimer: {
    enabled: true,
    text:    "Conteúdo informativo. Não existem garantias de resultados. Acesse com responsabilidade. Conteúdo destinado exclusivamente a maiores de 18 anos."
  },

  meta: {
    title:       "CRISSAM TIPS | Canal exclusivo no Telegram",
    description: "Tips e análises direto no seu Telegram. Canal exclusivo com vagas limitadas. Entre agora.",
    themeColor:  "#071108"
  }
};
