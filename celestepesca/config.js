/**
 * CELESTE PESCA — Configuração central
 * Todas as campanhas são gerenciadas por aqui.
 * Não é necessário editar o index.html entre campanhas.
 */
const pageConfig = {

  brand: {
    name:     "CELESTE PESCA",
    tagline:  "SORTEIOS & VENDAS DE EQUIPAMENTOS",
    handle:   "@celeste_pesca01",
    logo:     "images/logo.jpg",
  },

  /* ── CAMPANHA ATIVA ──────────────────────────────────────────── */
  campaign: {
    active:      true,
    statusLabel: "Grupo Ativo",

    /* Prêmio / destaque */
    name:       "SORTEIOS DE EQUIPAMENTOS",
    nameSub:    "DE PESCA",
    prizeSub:   "+ Ofertas Exclusivas para Membros",

    /* Mídia principal: "logo" | "image" | "video" */
    media: {
      type:   "logo",   // troque para "image" ou "video" quando tiver o asset
      src:    null,     // ex: "images/campanha.webp" ou "assets/promo.mp4"
      poster: null,     // usado quando type="video"
      alt:    "Celeste Pesca — Sorteios de Equipamentos de Pesca",
    },

    /* Meta bar do card */
    accessType:  "ACESSO GRATUITO",
    accessLabel: "Entrada no grupo",
    valueDisplay: "R$ 0",
    valueLabel:  "Participação",

    /* Banner promo (dentro do card) */
    promoBanner: "SORTEIOS EXCLUSIVOS PARA MEMBROS DO GRUPO",

    /* Features 2×2 */
    features: [
      { val: "SORTEIOS",  lbl: "Equipamentos"  },
      { val: "OFERTAS",   lbl: "Relâmpago"     },
      { val: "ACESSO",    lbl: "Gratuito"       },
      { val: "SAÍDA",     lbl: "Quando quiser"  },
    ],

    /* CTA principal */
    cta: {
      eyebrow: "Sem taxa · Saída livre",
      text:    "Entrar no Grupo",
      url:     "https://chat.whatsapp.com/DvTeg6DzTdG2EDoU6sE6eL",
    },
  },

  /* ── LINKS ───────────────────────────────────────────────────── */
  links: {
    whatsapp:  "https://chat.whatsapp.com/DvTeg6DzTdG2EDoU6sE6eL",
    instagram: "https://www.instagram.com/celeste_pesca01?utm_source=qr&igsh=NXptdm5vZ3J4OGRk",
    support:   null, // "https://wa.me/55..." — habilita botão flutuante de suporte
  },

  /* ── TICKER ──────────────────────────────────────────────────── */
  ticker: {
    enabled: true,
    messages: [
      "Sorteios de Equipamentos",
      "Ofertas Exclusivas",
      "Celeste Pesca",
      "Grupo Oficial",
      "Pesca Esportiva",
      "Ações para Membros",
      "Varas · Molinetes · Iscas",
      "Participação Gratuita",
    ],
  },

  /* ── BENEFÍCIOS ──────────────────────────────────────────────── */
  benefits: [
    {
      icon: "rod",
      title: "Sorteios de Equipamentos",
      desc:  "Varas, molinetes, iscas e muito mais. Participação exclusiva para membros do grupo.",
    },
    {
      icon: "bolt",
      title: "Ofertas Relâmpago",
      desc:  "Promoções de tempo limitado divulgadas no grupo antes de qualquer outro canal.",
    },
    {
      icon: "lock",
      title: "Acesso Antecipado",
      desc:  "Premiações e promoções chegam primeiro para quem está no grupo.",
    },
    {
      icon: "gift",
      title: "Brindes Surpresa",
      desc:  "Ações especiais com brindes e premiações extras para membros ativos.",
    },
  ],

  /* ── COMO PARTICIPAR ─────────────────────────────────────────── */
  howItWorks: [
    { step: "01", title: "Entre no grupo",     desc: "Clique no botão do WhatsApp e solicite participação. O acesso é gratuito e sem compromisso." },
    { step: "02", title: "Receba os avisos",   desc: "Sorteios e promoções são publicados pelo administrador diretamente no grupo." },
    { step: "03", title: "Participe das ações",desc: "Siga as instruções de cada sorteio ou promoção conforme publicado no grupo." },
  ],

  /* ── GANHADORES ──────────────────────────────────────────────── */
  winners: {
    enabled: false,  // true quando houver fotos reais
    items: [],       // { src: "images/ganhoador-01.webp", alt: "Ganhador equipamento" }
  },

  /* ── BANNERS ─────────────────────────────────────────────────── */
  banners: {
    instagram: {
      enabled: false,
      image:   null,   // "images/banner-ig.png"
      alt:     "Siga @celeste_pesca01 no Instagram",
      url:     "https://www.instagram.com/celeste_pesca01?utm_source=qr&igsh=NXptdm5vZ3J4OGRk",
    },
    whatsapp: {
      enabled: false,
      image:   null,   // "images/banner-wa.webp"
      alt:     "Entrar no grupo exclusivo da Celeste Pesca",
      url:     "https://chat.whatsapp.com/DvTeg6DzTdG2EDoU6sE6eL",
    },
  },

  /* ── FAQ ─────────────────────────────────────────────────────── */
  faq: [
    {
      q: "O grupo é realmente gratuito?",
      a: "Sim. A entrada é completamente gratuita e sem compromisso. Você pode sair a qualquer momento.",
    },
    {
      q: "Como funcionam os sorteios?",
      a: "Os sorteios são realizados pelo administrador e divulgados diretamente no grupo. As regras e condições ficam disponíveis junto com cada ação.",
    },
    {
      q: "Como acompanho o resultado?",
      a: "O resultado é divulgado no próprio grupo do WhatsApp e também no Instagram @celeste_pesca01.",
    },
    {
      q: "Posso participar de todas as ações?",
      a: "Sendo membro do grupo, você recebe os avisos de cada ação e pode participar conforme as regras divulgadas.",
    },
    {
      q: "Como entro em contato?",
      a: "Acompanhe pelo grupo ou pelo Instagram @celeste_pesca01.",
    },
  ],

  /* ── TRUST ───────────────────────────────────────────────────── */
  trust: [
    { text: "Grupo Oficial"    },
    { text: "Acesso Gratuito"  },
    { text: "Sorteios Reais"   },
    { text: "Saída Livre"      },
  ],

  /* ── CTA FLUTUANTE ───────────────────────────────────────────── */
  floatingCta: {
    enabled: true,
    label:   "Entrar no Grupo",
    url:     "https://chat.whatsapp.com/DvTeg6DzTdG2EDoU6sE6eL",
  },

  /* ── TRACKING ────────────────────────────────────────────────── */
  tracking: {
    events: {
      heroCtaClick:    "celeste_hero_cta_click",
      floatCtaClick:   "celeste_float_cta_click",
      finalCtaClick:   "celeste_final_cta_click",
      waClick:         "celeste_whatsapp_click",
      igClick:         "celeste_instagram_click",
      faqOpen:         "celeste_faq_open",
      scroll50:        "celeste_scroll_50",
      scroll90:        "celeste_scroll_90",
      videoPlay:       "celeste_video_play",
    },
  },

  /* ── DISCLAIMER ──────────────────────────────────────────────── */
  disclaimer: {
    enabled: true,
    text: "Ao entrar no grupo você concorda em receber conteúdos e ofertas relacionados à pesca. Você pode sair a qualquer momento. Os sorteios e premiações são realizados de forma transparente pelo administrador do grupo.",
  },

  /* ── META ────────────────────────────────────────────────────── */
  meta: {
    title:       "Celeste Pesca | Sorteios de Equipamentos de Pesca",
    description: "Entre no grupo oficial da Celeste Pesca e participe de sorteios de equipamentos, ofertas relâmpago e promoções exclusivas. Acesso gratuito.",
    themeColor:  "#060D1A",
  },

};
