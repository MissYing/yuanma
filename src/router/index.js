import Vue from 'vue'
import Router_ from 'vue-router'
import { constantRouterMap, } from '../config/common/router.config'
// import RequestHelper from '@/scripts/common/net/request-helper'
Vue.use(Router_)
const Router = new Router_({
  routes: constantRouterMap,
})
// Router.beforeEach((to, from, next) => {
//   RequestHelper.AbortAll()
//   next()
// })

export function install (Vue, router) {
  Vue.use(router)
}

export default Router
