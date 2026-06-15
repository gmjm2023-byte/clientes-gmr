/**
 * HELBER PREMIAÇÕES — Configuração central
 */
const pageConfig = {
  brand: {
    name:            "HELBER PREMIAÇÕES",
    tagline:         "RIFAS & AÇÕES DE PERFUMES DE NICHO",
    primaryColor:    "#E8B84B",
    backgroundColor: "#050303",
    textColor:       "#F5EDDA",
  },

  content: {
    eyebrow:     "GRUPO EXCLUSIVO NO WHATSAPP",
    headline:    "AS MELHORES RIFAS DE PERFUMES DE NICHO ESTÃO AQUI.",
    highlighted: "VOCÊ AINDA ESTÁ DE FORA?",
    description: "Ações exclusivas, perfumes raros e preços que só os membros do grupo conhecem. Cada ação dura pouco — quem está dentro sabe na hora.",
    stats: [
      { value: "162+", label: "membros ativos"     },
      { value: "47",   label: "ações realizadas"   },
      { value: "R$0",  label: "para participar"    }
    ],
    benefits: [
      "Rifas de perfumes importados",
      "Ações relâmpago exclusivas",
      "Preços que não aparecem fora do grupo"
    ]
  },

  cta: {
    primary: {
      text:           "QUERO ENTRAR NO GRUPO",
      url:            "https://chat.whatsapp.com/IeKnd2mzSmEI6n59tMDN7u?s=cl&p=i&ilr=0",
      openInNewTab:   true,
      supportingText: "Gratuito — mas as vagas são contadas."
    },
    secondary: {
      text:         "VER NO INSTAGRAM",
      url:          "https://www.instagram.com/helbercorreia1?igsh=dXY4cjM0dHFtbXZy&utm_source=qr",
      openInNewTab: true
    }
  },

  notifications: {
    enabled:         true,
    initialDelay:    1600,
    visibleDuration: 4200,
    intervals: [1200, 2400, 800, 8500, 1500, 3200, 700, 11000, 1800, 5000, 900, 2100, 7500, 1300, 4800],
    items: [
      { name: "João M.",     message: "entrou no grupo agora ✅"              },
      { name: "Carla S.",    message: "garantiu o acesso exclusivo 🔥"        },
      { name: "Bruno F.",    message: "entrou antes que as vagas acabem"       },
      { name: "Letícia R.",  message: "entrou no grupo agora ✅"              },
      { name: "Diego A.",    message: "garantiu a vaga dele 🔥"               },
      { name: "Fernanda C.", message: "entrou antes que fechasse"              },
      { name: "Ricardo T.",  message: "entrou no grupo agora ✅"              },
      { name: "Amanda B.",   message: "garantiu o acesso exclusivo 🔥"        },
      { name: "Gustavo L.",  message: "entrou antes que as vagas acabem"       },
      { name: "Patrícia N.", message: "entrou no grupo agora ✅"              }
    ]
  },

  urgency: {
    enabled:     true,
    spotsLeft:   38,
    spotsTotal:  200,
    label:       "vagas restantes"
  },

  disclaimer: {
    enabled: true,
    text:    "Ao entrar no grupo você concorda em receber conteúdos e ofertas. Você pode sair a qualquer momento. As ações são realizadas de forma transparente pelo administrador do grupo."
  },

  meta: {
    title:       "Helber Premiações | Rifas de Perfumes de Nicho",
    description: "Entre no grupo exclusivo e participe de rifas e ações de perfumes de nicho importados. Vagas limitadas.",
    themeColor:  "#050303"
  }
};
