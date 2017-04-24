const { connectionString } = require( '../config/config' )

console.log('connectionString:', connectionString)

module.exports = {
  client: 'pg',
  connection: connectionString,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + '/migrations',
    tableName: 'migrations'
  },
  seeds: {
    directory: __dirname + `/build/server/database/seeds/development`
  }
}
