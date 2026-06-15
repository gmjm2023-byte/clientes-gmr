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
    minInterval:          3500,
    maxInterval:          6500,
    visibleDuration:      4000,
    items: [
      { name: "Lucas S.",    message: "acabou de entrar no canal ✅"                   },
      { name: "Mariana R.",  message: "garantiu o acesso agora mesmo 🔥"               },
      { name: "Rafael M.",   message: "entrou antes que as vagas acabem"               },
      { name: "Ana P.",      message: "está recebendo as tips no Telegram agora"       },
      { name: "Pedro H.",    message: "acabou de se juntar à comunidade ⚡"            },
      { name: "Camila F.",   message: "não perdeu mais nenhuma tip desde que entrou"   },
      { name: "Thiago L.",   message: "entrou agora — restam poucas vagas 🚨"         },
      { name: "Juliana C.",  message: "garantiu a vaga antes que fechasse"             },
      { name: "Bruno K.",    message: "acabou de acessar o canal exclusivo"            },
      { name: "Fernanda O.", message: "entrou e já está recebendo conteúdo 🎯"        }
    ]
  },

  urgency: {
    enabled: true,
    spotsLeft: 47,
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
