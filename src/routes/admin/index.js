const express = require( 'express' )
const router = express.Router()
const Book = require( '../../database/queries/book')

router.get( '/', function( request, response ) {
  response.render('admin/add_book')
})

router.post( '/add', function( request, response) {
  const {title, price, image_url, page_count, description} = request.body
  const book_info = {title, price, image_url, page_count, description}
  const authors = request.body.author_name
  const genres = request.body.genre_name
  console.log('typeof request.body, request.body:', typeof request.body, request.body)



  const new_book_info = Object.keys( book_info ).reduce( (memo, key) => {
    if( book_info[ key ] !== '' ) {
      memo[ key ] = book_info[ key ]
    }

    return memo
  }, {})

  console.log('new_book_info:', new_book_info)

  Book.create(new_book_info)
    .then( new_book => response.redirect('/admin') )
})

module.exports = router
