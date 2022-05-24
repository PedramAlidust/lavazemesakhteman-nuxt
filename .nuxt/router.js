import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _30843d6c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _41f16f57 = () => import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */).then(m => m.default || m)
const _66586c74 = () => import('../pages/categories/_categorie/index.vue' /* webpackChunkName: "pages/categories/_categorie/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _30843d6c,
			name: "index"
		},
		{
			path: "/categories",
			component: _41f16f57,
			name: "categories"
		},
		{
			path: "/categories/:categorie",
			component: _66586c74,
			name: "categories-categorie"
		}
    ],
    
    
    fallback: false
  })
}
