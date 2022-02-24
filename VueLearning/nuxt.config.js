export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VueLearning',
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
    '@/assets/adminlte/adminlte.min.css',
    '@/assets/fontawesome-free/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
    // Doc: https://github.com/nuxt-community/style-resources-module
  ],

  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
