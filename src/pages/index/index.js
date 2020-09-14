import Vue from 'vue'
import Index from './index.vue'

import store from '@/store'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/styles/theme/default/index.css'
// import '@/assets/styles/common.scss'
// import '@/components/base/index.scss'
import axios from 'axios'
// import Utils from '@/scripts/common/utils'
// import Debug from '@/scripts/common/utils/debug'
// import RequestHelper from '@/scripts/common/net/request-helper'
// import Filters from '@/scripts/common/filters'
// import pdfMaker from '@/scripts/common/utils/pdfmaker'

// import Alarm from '@/scripts/common/utils/alarm'
// 基础组件
// import Rdcomponents from '@/components/base'
const IS_DEV = process.env.NODE_ENV !== 'production'

// lodash
window.axios = axios
// window.Utils = Utils
// window.alarm = Alarm
// window.debug = Debug
window.is_dev = IS_DEV
// Inject.extendAxios(axios)

// Object.defineProperty(Vue.prototype, '$utils', { value: Utils, })
// Object.defineProperty(Vue.prototype, '$alarm', { value: Alarm, })
// Object.defineProperty(Vue.prototype, '$requestHelper', { value: RequestHelper, })
// Object.defineProperty(Vue.prototype, '$debug', { value: Debug, })
Object.defineProperty(Vue.prototype, '$is_dev', { value: IS_DEV, })
// 全局注册过滤器
// Object.keys(Filters).forEach(k => Vue.filter(k, Filters[k]))

Vue.use(ElementUI)
// Vue.use(pdfMaker)
// 全局引入基础组件
// Vue.use(Rdcomponents)
Vue.config.productionTip = false
// v-dialogDrag: 弹窗拖拽
Vue.directive('dialog-drag', {
  bind (el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el
    dialogHeaderEl.style.cursor = 'move'

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)

    dialogHeaderEl.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      // 获取到的值带px 正则匹配替换
      let styL, styT

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/%/g, '') / 100)
        styT = +document.body.clientHeight * (+sty.top.replace(/%/g, '') / 100)
      } else {
        styL = +sty.left.replace(/px/g, '')
        styT = +sty.top.replace(/px/g, '')
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX
        const t = e.clientY - disY

        // 移动当前元素
        dragDom.style.left = `${l + styL}px`
        dragDom.style.top = `${t + styT > 0 ? t + styT : 0}px`

        // 将此时的位置传出去
        // binding.value({x:e.pageX,y:e.pageY})
        // 设置实时监控弹窗 多路视频的位置
        document.documentElement.style.setProperty('--l', `${l + styL - 1}px`)
        document.documentElement.style.setProperty('--t', `${t + styT}px`)
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
})

/* eslint-disable no-new */
window.vue = new Vue({
  router,
  store,
  render: h => h(Index),
}).$mount('#app')
