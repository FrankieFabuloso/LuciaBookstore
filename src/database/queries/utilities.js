import knex from '../knex'

const firstRecord = records => records[0]

const createRecord = ( table, attributes ) =>
  knex
    .table( table )
    .insert( attributes )
    .returning( '*' )
    .then( firstRecord )

const findRecord = ( table, column, data )  =>
  knex
    .table( table )
    .where( column, data )
    .returning( '*' )
    .then( firstRecord)

const findAll = table =>
  knex
    .select()
    .table( table )

const updateRecord = ( table, column, data, attributes ) =>
  knex
    .table( table )
    .where( column, data )
    .update( attributes )
    .returning( '*' )
    .then( firstRecord )

const deleteRecord = ( table, column, data ) =>
  knex
    .table( table )
    .where( column, data )
    .del()

const deleteAll = table =>
  knex.raw( `DELETE FROM ${table}` )

export {
  createRecord,
  findRecord,
  firstRecord,
  findAll,
  updateRecord,
  deleteRecord,
  deleteAll
}
