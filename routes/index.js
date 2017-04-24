const express = require( 'express' )
const router = express.Router()
// const Book = require('../src/')
router.get( '/', function( request, response ) {
  response.render('home')
})

module.exports = router
