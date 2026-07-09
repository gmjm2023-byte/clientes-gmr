/**
 * CELESTE PESCA — Configuração central
 * Todas as campanhas são gerenciadas por aqui.
 * Não é necessário editar o index.html entre campanhas.
 */
const pageConfig = {

  brand: {
    name:     "CELESTE PESCA",
    tagline:  "ACHADOS EM PROMOÇÃO",
    handle:   "@celeste_pesca01",
    logo:     "images/logo.jpg",
  },

  /* ── CAMPANHA ATIVA ──────────────────────────────────────────── */
  campaign: {
    active:      true,
    statusLabel: "Grupo Ativo",

    /* Prêmio / destaque */
    name:       "ACHADOS EM PROMOÇÃO",
    nameSub:    "PESCA · CAMPING · FERRAMENTAS",
    prizeSub:   "+ Ofertas Exclusivas para Membros",

    /* Mídia principal: "logo" | "image" | "video" */
    media: {
      type:   "logo",   // troque para "image" ou "video" quando tiver o asset
      src:    null,     // ex: "images/campanha.webp" ou "assets/promo.mp4"
      poster: null,     // usado quando type="video"
      alt:    "Celeste Pesca — Achados em Promoção",
    },

    /* Meta bar do card */
    accessType:  "ACESSO GRATUITO",
    accessLabel: "Entrada no grupo",
    valueDisplay: "R$ 0",
    valueLabel:  "Participação",

    /* Banner promo (dentro do card) */
    promoBanner: "PROMOÇÕES EXCLUSIVAS PARA MEMBROS DO GRUPO",

    /* Features 2×2 */
    features: [
      { val: "ACHADOS",   lbl: "Em Promoção"    },
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
      "Achados em Promoção",
      "Ofertas Exclusivas",
      "Celeste Pesca",
      "Grupo Oficial",
      "Pesca · Camping · Ferramentas",
      "Ofertas Relâmpago",
      "Descontos Todos os Dias",
      "Participação Gratuita",
    ],
  },

  /* ── BENEFÍCIOS ──────────────────────────────────────────────── */
  benefits: [
    {
      icon: "rod",
      title: "Achados em Promoção",
      desc:  "Itens de pesca, camping e ferramentas com desconto, selecionados todos os dias para o grupo.",
    },
    {
      icon: "bolt",
      title: "Ofertas Relâmpago",
      desc:  "Promoções de tempo limitado divulgadas no grupo antes de qualquer outro canal.",
    },
    {
      icon: "lock",
      title: "Acesso Antecipado",
      desc:  "As melhores ofertas chegam primeiro para quem está no grupo.",
    },
    {
      icon: "gift",
      title: "Achados Variados",
      desc:  "Itens de pesca, camping e ferramentas garimpados especialmente para os membros.",
    },
  ],

  /* ── COMO PARTICIPAR ─────────────────────────────────────────── */
  howItWorks: [
    { step: "01", title: "Entre no grupo",     desc: "Clique no botão do WhatsApp e solicite participação. O acesso é gratuito e sem compromisso." },
    { step: "02", title: "Receba os avisos",   desc: "Achados e promoções são publicados pelo administrador diretamente no grupo." },
    { step: "03", title: "Aproveite os achados",desc: "As melhores ofertas saem rápido — aproveite assim que forem publicadas no grupo." },
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
      q: "Como funcionam as promoções?",
      a: "As ofertas e achados são selecionados pelo administrador e divulgados diretamente no grupo assim que aparecem.",
    },
    {
      q: "Onde vejo as promoções?",
      a: "As promoções são divulgadas no próprio grupo do WhatsApp e também no Instagram @celeste_pesca01.",
    },
    {
      q: "Posso aproveitar todas as ofertas?",
      a: "Sendo membro do grupo, você recebe todas as promoções e pode aproveitar as que quiser, sem compromisso.",
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
    { text: "Ofertas Reais"    },
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
    text: "Ao entrar no grupo você concorda em receber conteúdos e ofertas de pesca, camping e ferramentas. Você pode sair a qualquer momento. As promoções são divulgadas de forma transparente pelo administrador do grupo.",
  },

  /* ── META ────────────────────────────────────────────────────── */
  meta: {
    title:       "Celeste Pesca | Achados e Promoções de Pesca, Camping e Ferramentas",
    description: "Entre no grupo oficial da Celeste Pesca e receba achados e promoções de itens de pesca, camping e ferramentas. Acesso gratuito.",
    themeColor:  "#060D1A",
  },

};
