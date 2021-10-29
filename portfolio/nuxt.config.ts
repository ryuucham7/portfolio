import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ryuucham.com/_nuxt/img/1aedb0e.jpg'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/_variables.scss'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Serif', 'Muli', 'Sawarabi+Mincho', 'Oswald']
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/doughnut-chart.js', ssr: false },
    { src: '~/plugins/scroll.js', ssr: false },
    '~/plugins/fontawesome'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-165323333-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          file: 'en.js'
        },
        {
          code: 'ja',
          file: 'ja.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {}
  }
}

export default config
