import fs from 'fs'
import path from 'path'
require('dotenv').config({path: '../../.env'})
require('dotenv').config()

const connectionString = process.env.DATABASE_URL
// console.log('process.env:', process.env)
console.log('connectionString:', connectionString)
export { connectionString }
