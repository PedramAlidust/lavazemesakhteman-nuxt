import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0932cc7d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6183b22c = () => interopDefault(import('..\\pages\\CataloguePdf.vue' /* webpackChunkName: "pages/CataloguePdf" */))
const _74d14bfa = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _34c4a307 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _299f9afb = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _65e22edb = () => interopDefault(import('..\\pages\\ProductsPdf.vue' /* webpackChunkName: "pages/ProductsPdf" */))
const _2d0a1c90 = () => interopDefault(import('..\\pages\\blog\\about.vue' /* webpackChunkName: "pages/blog/about" */))
const _c64c4354 = () => interopDefault(import('..\\pages\\blog\\_blog\\index.vue' /* webpackChunkName: "pages/blog/_blog/index" */))
const _bb5a7b6a = () => interopDefault(import('..\\pages\\categories\\_categorie\\index.vue' /* webpackChunkName: "pages/categories/_categorie/index" */))
const _7a361c8b = () => interopDefault(import('..\\pages\\products\\_product\\index.vue' /* webpackChunkName: "pages/products/_product/index" */))
const _0ef20c9f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/2022/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _0932cc7d,
    name: "blog"
  }, {
    path: "/CataloguePdf",
    component: _6183b22c,
    name: "CataloguePdf"
  }, {
    path: "/categories",
    component: _74d14bfa,
    name: "categories"
  }, {
    path: "/order",
    component: _34c4a307,
    name: "order"
  }, {
    path: "/products",
    component: _299f9afb,
    name: "products"
  }, {
    path: "/ProductsPdf",
    component: _65e22edb,
    name: "ProductsPdf"
  }, {
    path: "/blog/about",
    component: _2d0a1c90,
    name: "blog-about"
  }, {
    path: "/blog/:blog",
    component: _c64c4354,
    name: "blog-blog"
  }, {
    path: "/categories/:categorie",
    component: _bb5a7b6a,
    name: "categories-categorie"
  }, {
    path: "/products/:product",
    component: _7a361c8b,
    name: "products-product"
  }, {
    path: "/",
    component: _0ef20c9f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
