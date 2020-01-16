import webpack from 'webpack'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Brandon Nourse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#35BEF2'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap'
      }
    ],
    script: [
      {
        src: '//kit.fontawesome.com/07b1529b9a.js',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#35BEF2' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-flexboxgrid.js',
    '@/plugins/content-types.js',
    '@/plugins/base-ui.js',
    {
      src: '@/plugins/vue-scrollmagic.js',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: 'https://nourseofcourse.com/wp-json'
  },
  /*
  ** Environmental Variables
  ** See https://nuxtjs.org/api/configuration-env/
  */
  env: {
    baseURL: 'https://nourseofcourse.com/wp-json'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery'
        })
      ]
    },
    /*
    ** Modify the autoprefixer
    */
    postcss: {
      autoprefixer: {
        browsers: ['last 4 versions', 'ie >= 9']
      }
    }
  }
}
