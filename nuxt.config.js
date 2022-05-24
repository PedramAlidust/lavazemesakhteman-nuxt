const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css' }
    ], 
    script: [
      { src: '/js/bootstrap/bootstrap.bundle.min.js', body: true },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css', 
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/bootstrap/css/bootstrap.rtl.min.css',
  ],


  

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    extend(config, {
      isClient
    }) {
      config
        .module
        .rules
        .push({
          test: /\.(webp)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
          ]
        })   
     }
  },
}
