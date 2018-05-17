const express = require('express')
const router = express.Router()
const User = require('../models/User')


// 注册
router.post('/user/register', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  let repassword = req.body.repassword

  User.findOne({
    username: username
  }).then((userInfo) => {
    if (userInfo) {
      res.json('用户名已被注册')
      return
    }
    let user = new User({
      username: username,
      password: password
    })
    return user.save()
  }).then((newInfo) => {
    res.json('注册成功')
    console.log(newInfo)
  })
})

// 登录
router.post('/user/login', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password

  User.findOne({
    username: username,
    password: password
  }).then((userInfo) => {
    if (!userInfo) {
      res.json('用户名不存在或密码错误')
      return
    } else {
      res.json('用户名存在')
      return
    }
  })
})

module.exports = router
