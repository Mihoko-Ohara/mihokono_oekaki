const webpack = require('webpack')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mihokono_oekaki',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      'nuxt-webfontloader'
  ],

    webfontloader: {
    google: {
      families: ['Assistant:200', 'Noto+Sans+JP:100,300']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      plugins: [
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery'
        })
      ]
  }
}
