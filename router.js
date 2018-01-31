const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const routeConfig = require('./routeConfig')
// 动态读取路由
routeConfig.forEach(v => {
  router[v.method.toLowerCase()](v.url, async ctx => {
    if (!v.data) return ctx.state.data = await readFile(v.path)
    let checked = true
    if (v.method.toLowerCase() === 'get') {
      checked = isCommonObj(ctx.query, v.data)
    } else {
      checked = isCommonObj(ctx.request.body, v.data)
    }
    checked && (ctx.state.data = await readFile(v.path))
  })
})
function readFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  })
}
function isCommonObj (a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (let x in a) {
    if (!b[x] || (b[x] !== a[x])) return false
  }
  return true
}
module.exports = router