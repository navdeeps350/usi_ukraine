import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _503f5f5a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _481a3ebb = () => interopDefault(import('../pages/conditions.vue' /* webpackChunkName: "pages/conditions" */))
const _4061c52d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7c8ea6e9 = () => interopDefault(import('../pages/data-protection.vue' /* webpackChunkName: "pages/data-protection" */))
const _6ff73a1f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8ebf8950 = () => interopDefault(import('../pages/itinerary.vue' /* webpackChunkName: "pages/itinerary" */))
const _4bc6a5f0 = () => interopDefault(import('../pages/marys-meals.vue' /* webpackChunkName: "pages/marys-meals" */))
const _100e374a = () => interopDefault(import('../pages/perform-redirect-marysmeals.vue' /* webpackChunkName: "pages/perform-redirect-marysmeals" */))
const _05ecc7a6 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _ab646a94 = () => interopDefault(import('../pages/redirect-marysmeals.vue' /* webpackChunkName: "pages/redirect-marysmeals" */))
const _4696b69b = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _503f5f5a,
    name: "about___it"
  }, {
    path: "/conditions",
    component: _481a3ebb,
    name: "conditions___it"
  }, {
    path: "/contact",
    component: _4061c52d,
    name: "contact___it"
  }, {
    path: "/data-protection",
    component: _7c8ea6e9,
    name: "data-protection___it"
  }, {
    path: "/en",
    component: _6ff73a1f,
    name: "index___en"
  }, {
    path: "/itinerary",
    component: _8ebf8950,
    name: "itinerary___it"
  }, {
    path: "/marys-meals",
    component: _4bc6a5f0,
    name: "marys-meals___it"
  }, {
    path: "/perform-redirect-marysmeals",
    component: _100e374a,
    name: "perform-redirect-marysmeals___it"
  }, {
    path: "/project",
    component: _05ecc7a6,
    name: "project___it"
  }, {
    path: "/redirect-marysmeals",
    component: _ab646a94,
    name: "redirect-marysmeals___it"
  }, {
    path: "/signup",
    component: _4696b69b,
    name: "signup___it"
  }, {
    path: "/en/about",
    component: _503f5f5a,
    name: "about___en"
  }, {
    path: "/en/conditions",
    component: _481a3ebb,
    name: "conditions___en"
  }, {
    path: "/en/contact",
    component: _4061c52d,
    name: "contact___en"
  }, {
    path: "/en/data-protection",
    component: _7c8ea6e9,
    name: "data-protection___en"
  }, {
    path: "/en/itinerary",
    component: _8ebf8950,
    name: "itinerary___en"
  }, {
    path: "/en/marys-meals",
    component: _4bc6a5f0,
    name: "marys-meals___en"
  }, {
    path: "/en/perform-redirect-marysmeals",
    component: _100e374a,
    name: "perform-redirect-marysmeals___en"
  }, {
    path: "/en/project",
    component: _05ecc7a6,
    name: "project___en"
  }, {
    path: "/en/redirect-marysmeals",
    component: _ab646a94,
    name: "redirect-marysmeals___en"
  }, {
    path: "/en/signup",
    component: _4696b69b,
    name: "signup___en"
  }, {
    path: "/",
    component: _6ff73a1f,
    name: "index___it"
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
