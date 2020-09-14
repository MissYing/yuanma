import Img403 from '@/assets/images/expeption/403.svg'
import Img404 from '@/assets/images/expeption/404.svg'
import Img500 from '@/assets/images/expeption/500.svg'

const types = {
  403: {
    img: Img403,
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: Img404,
    title: '404',
    desc: '抱歉，你访问的页面不存在或仍在开发中',
  },
  500: {
    img: Img500,
    title: '500',
    desc: '抱歉，服务器出错了',
  },
}

export default types
