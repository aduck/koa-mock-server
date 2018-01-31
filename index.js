const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const handle = require('./middle/handle')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
app.use(cors())
app.use(bodyParser())
app.use(handle)
app.use(router.routes())
app.listen(1234, () => {
  console.log('mock server runing')
})