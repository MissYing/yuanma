// 引入封装的axios
// import { Request as request, } from 'ng-foundation-lib'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// 测试
import { test, } from './apps/test'

export default {
  /**
   * mock ajax
   */
  ajax () {
    const mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('web-api//Success').reply(200, {
      msg: 'success',
    })

    // mock error request
    mock.onGet('web-api//Error').reply(500, {
      msg: 'failure',
    })

    function requestPost (url, res, time = 1000) {
      // console.info('mock', url, res)
      mock.onPost(url).reply(config => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([ 200, res, ])
          }, time)
        })
      })
    }
    // 分页查询任务
    requestPost('web-api/report/paginate.action', test, 300)
  },
}
