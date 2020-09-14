import Vue from 'vue'
import Login from './index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/styles/theme/default/index.css'
// import '@/components/base/index.scss'
import store from '@/store'
// import Utils from '@/scripts/common/utils'
// import Debug from '@/scripts/common/utils/debug'

// import Alarm from '@/scripts/common/utils/alarm'
// 基础组件
// import Rdcomponents from '@/components/base'
// import $ from 'jquery'

// lodash
// window.Utils = Utils
// window.alarm = Alarm
// window.debug = Debug

// Object.defineProperty(Vue.prototype, '$utils', { value: Utils, })
// Object.defineProperty(Vue.prototype, '$alarm', { value: Alarm, })
// Object.defineProperty(Vue.prototype, '$debug', { value: Debug, })

Vue.use(ElementUI)
// 全局引入基础组件
// Vue.use(Rdcomponents)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vue = new Vue({
  store,
  render: h => h(Login),
}).$mount('#app')
