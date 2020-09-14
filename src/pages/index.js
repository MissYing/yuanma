const Pages = [// 多页面配置
  'index', // 首页
  'login', // 登录
  // 'new-login', // 新登录
]

const generatePage = (config) => {
  const isObject = typeof(config) === 'object'
  let pageName = config
  let template = pageName
  let filename = pageName
  if (isObject) {
    pageName = config.entry
    template = config.template || pageName
    filename = config.filename || pageName
  }
  return {
    entry: `./src/pages/${pageName}/index.js`,
    template: `./src/pages/${pageName}/${template}.html`,
    filename: `${filename}.html`,
    chunks: [ 'chunk-vendors', 'chunk-common', `${pageName}`, ],
    pageName,
  }
}

const getPages = (pages) => {
  const pageConfigs = {}
  for (let i = 0, len = pages.length; i < len; i++) {
    let pageName = pages[i]
    const pageConfig = generatePage(pageName)
    // console.log(pageConfig)
    pageName = pageConfig.pageName
    delete pageConfig.pageName
    pageConfigs[pageName] = pageConfig
  }
  return pageConfigs
}

module.exports = getPages(Pages)
