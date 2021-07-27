const webpack = require('webpack')

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mihoko illustration',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'mihoko illustration' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://mihoko.netlify.app' },
      { hid: 'og:title', property: 'og:title', content: 'mihoko illustration' },
      { hid: 'og:description', property: 'og:description', content: 'Official website of illustrator mihoko' },
      { hid: 'og:image', property: 'og:image', content: 'https://mihoko.netlify.app/img/common/mihoko_ogp.png' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

    webfontloader: {
    google: {
      families: ['Assistant:200', 'Noto+Sans+JP:100,300']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extend(config) {
        config.performance.maxAssetSize = 700000;
      }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      'nuxt-webfontloader',
      '@nuxtjs/axios',
      ['@nuxtjs/google-gtag'],
      'nuxt-lazy-load'
  ],

  'google-gtag': {
    id: 'G-JRK72QM92W'
  },

  axios: {
    // proxyHeaders: false
  }
}
