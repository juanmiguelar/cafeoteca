export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
  },

  googleFonts: {
    families: {
      Cinzel: [400, 600, 700],
      Montserrat: [300, 400, 500, 600, 700, 800],
      'Playfair Display': {
        wght: [400, 600, 700],
        ital: [400],
      },
    },
    display: 'swap',
    download: true,
    overwriting: false,
  },

  site: {
    url: 'https://cafeoteca.cr',
    name: 'Cafeoteca',
    description: 'Café de especialidad, cultura y comunidad en Barrio Escalante, San José, Costa Rica. Micro-tostaduría, pastelería artesanal y espacio gastronómico.',
    defaultLocale: 'es',
  },

  ogImage: {
    enabled: false,
  },

  devtools: { enabled: true },

  build: {
    transpile: ['vue'],
  },

  nitro: {
    preset: 'vercel',
    externals: {
      traceInclude: ['vue'],
    },
  },

  routeRules: {
    // ISR for all pages by default
    '/**': { isr: 3600 },
  },
})
