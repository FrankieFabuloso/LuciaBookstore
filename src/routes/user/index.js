const express = require('express')
const router = express.Router()

router.get( '/', function( request, response ) {
  response.render('user/book_list')
})

module.exports = router
