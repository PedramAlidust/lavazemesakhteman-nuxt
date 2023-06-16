import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _316d800b = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _246fb385 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _003cda4a = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _573ec04d = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _15002350 = () => interopDefault(import('../pages/ProductsPdf.vue' /* webpackChunkName: "pages/ProductsPdf" */))
const _11b5a546 = () => interopDefault(import('../pages/blog/about.vue' /* webpackChunkName: "pages/blog/about" */))
const _30407986 = () => interopDefault(import('../pages/blog/_blog/index.vue' /* webpackChunkName: "pages/blog/_blog/index" */))
const _bd228650 = () => interopDefault(import('../pages/categories/_categorie/index.vue' /* webpackChunkName: "pages/categories/_categorie/index" */))
const _28485f70 = () => interopDefault(import('../pages/products/_product/index.vue' /* webpackChunkName: "pages/products/_product/index" */))
const _cc7f2448 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _316d800b,
    name: "blog"
  }, {
    path: "/categories",
    component: _246fb385,
    name: "categories"
  }, {
    path: "/order",
    component: _003cda4a,
    name: "order"
  }, {
    path: "/products",
    component: _573ec04d,
    name: "products"
  }, {
    path: "/ProductsPdf",
    component: _15002350,
    name: "ProductsPdf"
  }, {
    path: "/blog/about",
    component: _11b5a546,
    name: "blog-about"
  }, {
    path: "/blog/:blog",
    component: _30407986,
    name: "blog-blog"
  }, {
    path: "/categories/:categorie",
    component: _bd228650,
    name: "categories-categorie"
  }, {
    path: "/products/:product",
    component: _28485f70,
    name: "products-product"
  }, {
    path: "/",
    component: _cc7f2448,
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
