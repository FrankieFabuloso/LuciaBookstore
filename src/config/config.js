import fs from 'fs'

if ( fs.existsSync('.env') ) {
  require('dotenv').config()
}

const connectionString = process.env.DATABASE_URL
console.log('connectionString:', connectionString)
export { connectionString }
