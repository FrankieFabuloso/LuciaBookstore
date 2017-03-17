import Knex from 'knex'
import knexConfig from './knexfile'

console.log('knexConfig:', knexConfig)

const knex = Knex( knexConfig )

export default knex
