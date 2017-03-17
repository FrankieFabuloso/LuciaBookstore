import knex from '../knex'

const firstRecord = records => records[0]

const createRecord = (table, attributes) =>
  knex
    .table(table)
    .insert(attributes)

const findRecord = (table, column, data)  =>
  knex
    .table(table)
    .where(column, data),
    .returning('*')
    .then(firstRecord)

const findAllWhere = ( table, column, data ) => {
  knex
    .table(table)
    .where( column, data)
    .returning('*')
}

const findAll = table => {
  knex
    .table(table)
    .returning('*')
}

const updateRecord = ( table, column, data ) => {
  attributes.update_at = knex.raw('now()')

  return knex
    .table(table)
    .where(column, data)
    .update(attributes)
    .returning('*')
    .then(firstRecord)
}

const deleteRecord = ( table, column, data ) =>
  knex
    .table(table)
    .where(column, data)
    .del()

const deleleAll = table => {
  kenx.raw(`DELETE FORM ${table}`)
}

export {
  createRecord,
  findRecord,
  firstRecord,
  updateRecord,
  deleteRecord,
  deleleAll
}
