const express = require('express')
const router = express.Router()
var data = {
  code: 2
}
router.post('/', (req, res, next) => {
  // res.json(data)
  // console.log(req.body)
  // res.end('aa')
})

module.exports = router
