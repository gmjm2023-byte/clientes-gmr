/**
 * CRISSAM TIPS — Arquivo de configuração central
 * Edite aqui para alterar textos, cores, links e notificações.
 */
const pageConfig = {
  brand: {
    name:               "CRISSAM TIPS",
    logo:               "images/logo.png",   // ← coloque a logo aqui
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
    badge:           "CONTEÚDO DIRETO NO TELEGRAM",
    headline:        "ANÁLISES E TIPS DIRETO NO SEU TELEGRAM",
    highlightedText: "DIRETO NO SEU TELEGRAM",
    description:     "Entre para a comunidade da CRISSAM TIPS e acompanhe conteúdos, análises e atualizações em um só lugar.",
    benefits: [
      { icon: "zap",       label: "Conteúdo direto"       },
      { icon: "refresh",   label: "Atualizações frequentes" },
      { icon: "telegram",  label: "Acesso pelo Telegram"   }
    ]
  },

  cta: {
    text:           "ENTRAR NO TELEGRAM",
    // ─────────────────────────────────────────────────────────────────
    // ↓  SUBSTITUA AQUI o link do Telegram antes de publicar  ↓
    url:            "https://t.me/+431aQO7lN58xNmJh",
    // ─────────────────────────────────────────────────────────────────
    openInNewTab:   true,
    supportingText: "Clique para acessar o canal oficial da CRISSAM TIPS."
  },

  notifications: {
    enabled:              true,
    showIllustrativeLabel: true,
    illustrativeLabel:    "Atividade ilustrativa",
    initialDelay:         2500,   // ms antes da primeira notificação
    minInterval:          4500,   // ms mínimo entre notificações
    maxInterval:          8000,   // ms máximo entre notificações
    visibleDuration:      4000,   // ms que a notificação fica visível
    items: [
      { name: "Lucas",    message: "acabou de acessar a página"          },
      { name: "Mariana",  message: "conferiu o canal da CRISSAM TIPS"    },
      { name: "Rafael",   message: "está conhecendo a comunidade"         },
      { name: "Ana",      message: "acessou as informações do Telegram"   },
      { name: "Pedro",    message: "mais uma pessoa visitou a página"     },
      { name: "Camila",   message: "descobriu a CRISSAM TIPS hoje"        },
      { name: "Thiago",   message: "acessou o canal da CRISSAM TIPS"     }
    ]
  },

  disclaimer: {
    enabled: true,
    text:    "Conteúdo informativo. Não existem garantias de resultados. Acesse com responsabilidade. Conteúdo destinado exclusivamente a maiores de 18 anos."
  },

  meta: {
    title:       "CRISSAM TIPS | Conteúdo direto no Telegram",
    description: "Acesse a comunidade da CRISSAM TIPS no Telegram e acompanhe conteúdos, análises e atualizações.",
    themeColor:  "#071108"
  }
};
