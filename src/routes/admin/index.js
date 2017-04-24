const express = require( 'express' )
const router = express.Router()
const Book = require( '../../database/queries/book')

router.get( '/', function( request, response ) {
  response.send('helo im admin')
})

module.exports = router
