const express = require( 'express' )
const router = express.Router()
const Book = require( '../database/queries/book')

router.get( '/', function( request, response ) {
  Book.getAll().then( books => response.render('home', {books}))
})

module.exports = router
