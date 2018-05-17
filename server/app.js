const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swig = require('swig')
const app = express()

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})
// app.get('/', function (req, res) {
//   res.statusCode = 200;
//   // res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
//   )
//   res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.setHeader('X-Powered-By', ' 3.2.1')
//   // res.send('Hello World!');
//   res.json({
//     code: 1
//   })
// });

app.use('/', require('./routers/main'))
app.use('/api', require('./routers/api'))

mongoose.connect('mongodb://localhost:27018/blog', (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('数据库连接成功')
    app.listen(3000)
  }
})
