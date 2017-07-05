var path = require('path')
var express = require('express')
var app = express()
var PORT = '8060'

var proxyMiddleware = require('http-proxy-middleware')
//var proxyTable = require('./config/proxy')
var static = express.static(path.join(__dirname, './dist/static'))
app.use('/static', static)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})
/*var session = require('express-session')
var FileStore = require('session-file-store')(session)

 var static = express.static(path.join(__dirname, './dist/static'))
 var isLogin = require('./router/isLogin')

 var bodyParser = require('body-parser');
 //var log4js = require('log4js')
 //log4js.configure(path.join(__dirname, './config/log4js.json'));

 app.use(bodyParser.json())
 app.use('/static', static)
 // session
 app.use(session({
 secret: 'keyboard cat',
 resave: false,
 store: new FileStore({
 // 过期时间 单位：秒
 ttl: 60 * 60 * 24 * 14,
 path: path.join(__dirname, './session')
 }),
 saveUninitialized: true
 }))

 Object.keys(proxyTable).forEach(function (context) {
 var options = proxyTable[context]
 if (typeof options === 'string') {
 options = { target: options }
 }
 app.use(proxyMiddleware(options.filter || context, options))
 })

 app.get('/isLogin', isLogin)

 app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, './dist/index.html'))
 })*/

console.log(`listening ${PORT}`)
app.listen(PORT)
