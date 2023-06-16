const pkg = require('./package')

module.exports = {
  ssr: true,
  telemetry: false,

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
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' }
    ],
    script: [
      { src: '/js/bootstrap/bootstrap.bundle.min.js', body: true },
      { src: ' https://code.jquery.com/jquery-3.6.0.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.js', body: true },
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
    '~/assets/css/slick.css',
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
    //Axios for requests
    "@nuxtjs/axios",

    //Cookies With options
    ["cookie-universal-nuxt", { alias: "cookiz" }],

    //pwa
    '@nuxtjs/pwa',
  ],

   /*
   ** Build configuration
   */
   buildModules: [
    '@nuxtjs/pwa',
  ],


  /* Set envirement variable */
  env: {
    UrlApi: "https://lavazemesakhteman.com",
  },
  
  pwa: {
    manifest: {
      name: 'Lavazemesakhteman Application',
    },
  },
  
  /* run app in subdirectory */
  /*     
  router: {      
    base: '/2022/'
  }
  */
}
