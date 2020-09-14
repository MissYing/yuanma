import Vue from 'vue'
import Vuex from 'vuex'
// 手动引入
import example from './apps/example' // 示例

// vuex模块扩展，以modules中的key做命名空间
const modules = {
  example,
}

for (const key in modules) { // 统一启用命名空间
  modules[key].namespaced = true
}
// 启用vuex
Vue.use(Vuex)
export default new Vuex.Store({
  modules,
})
