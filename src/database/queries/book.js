import * as utilities from 'utilities'

const getAllBooks = () =>
  utilities.findAll( 'book' )

const createBook = ( data ) =>
  utilities.createRecord( 'book', data )

const findBook = ( column, data ) =>
  utilities.findRecord( 'book', column, data )

const updateBook = ( id, data ) =>
  utilities.updateRecord( 'book', 'id', id, data )

const deleteBook = ( id ) =>
  utilities.deleteRecord( 'book', 'id', id )

const truncateBookTable = () =>
  utilities.deleteAll( 'book' )

export {
  getAllBooks,
  createBook,
  findBook,
  updateBook,
  deleteBook,
  truncateBookTable
}
