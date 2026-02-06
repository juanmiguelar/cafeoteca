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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
        },
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
})
