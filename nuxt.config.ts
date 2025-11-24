export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css', '~/assets/index.css'],

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },

  app: {
      head: {
          title: 'Kruskopf Web',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]
      }
  },

  compatibilityDate: '2025-11-23'
})