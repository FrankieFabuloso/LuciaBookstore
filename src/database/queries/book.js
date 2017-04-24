const utilities = require( './utilities' )

const getAll = () =>
  utilities.findAll( 'book' )

const create = ( data ) =>
  utilities.createRecord( 'book', data )

const find = ( column, data ) =>
  utilities.findRecord( 'book', column, data )

const update = ( id, data ) =>
  utilities.updateRecord( 'book', 'id', id, data )

const deleteIt = ( id ) =>
  utilities.deleteRecord( 'book', 'id', id )

const truncateTable = () =>
  utilities.deleteAll( 'book' )

module.exports = {
  getAll,
  create,
  find,
  update,
  deleteIt,
  truncateTable
}
