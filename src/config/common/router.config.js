const IS_DEV = process.env.NODE_ENV !== 'production'
/**
 * 基础路由，本地开发可以放
 * @type { *[] }
 */
// 空容器包裹层
console.log(IS_DEV)
console.log(process.env)
import Wrap from '@/components/apps/layout/wrap/'
// supervision首页，用于跳转到第一个可访问路由
import SupervisionIndex from '@/views/supervision/index'
import Page404 from '@/views/exception/404'
import Page500 from '@/views/exception/500'
import Page403 from '@/views/exception/403'
// import DevLog from '@/views/dev/log'

// 错误路由拦截器
export const constantRouterMapError = [
  {
    path: '*', redirect: '/404', hidden: true,
  },
]
// 静态路由
export const constantRouterMap = [
  // =================================
  // 固定页面菜单，用于异常页面跳转
  // =================================
  {
    path: '/',
    hidden: true,
    component: SupervisionIndex,
  },
  {
    path: '/403',
    hidden: true,
    component: Page403,
  },
  {
    path: '/404',
    hidden: true,
    component: Page404,
  },
  {
    path: '/500',
    hidden: true,
    component: Page500,
  },
  // dev-log
  // {
  //   path: '/--log--',
  //   hidden: true,
  //   component: DevLog,
  // },
  // =================================
  // 测试菜单，用于组件测试，开发环境可见
  // =================================
  {
    path: '/test',
    name: '测试',
    icon: 'iconshuoming',
    iconSize: '22',
    hidden: !IS_DEV,
    component: Wrap,
    children: [
      // {
      //   path: '/test/test',
      //   name: 'test页',
      //   hidden: false,
      //   component: () => import(/* webpackChunkName: "demo" */ '@/views/test'),
      // },
      // {
      //   path: '/test/demo1',
      //   name: 'demo1',
      //   hidden: false,
      //   component: () => import(/* webpackChunkName: "demo" */ '@/views/demo1'),
      // },
      // {
      //   path: '/test/demo2',
      //   name: 'demo2',
      //   hidden: false,
      //   component: () => import(/* webpackChunkName: "demo" */ '@/views/demo2'),
      // },
      // {
      //   path: '/test/demo3',
      //   name: 'demo3',
      //   hidden: false,
      //   component: () => import(/* webpackChunkName: "demo" */ '@/views/demo3'),
      // },
    ],
  },
  // ==================
  // 测试
  // ==================
  {
    path: '/spec',
    name: '以下为真实菜单',
    icon: 'iconshuoming',
    iconSize: '22',
    hidden: !IS_DEV,
    component: Wrap,
  },
]

