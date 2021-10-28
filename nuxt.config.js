export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '2021 한국항공대학교 프로그래밍 경진대회',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '제 1회 한국항공대 프로그래밍 경진대회' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "og:image:secure_url", property: "og:image:secure_url", content: "https://user-images.githubusercontent.com/26535030/138441137-e01e971a-e05f-490b-be19-40fe02de23aa.png" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;1,400&display=swap",
      },
      {
        rel: 'stylesheet',
        href:
          "//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/global.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/aos.client"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],
  target: 'static',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
