'use strict'

const knex = require('knex')
const Config = require('./config')

// connection database
const Db = knex({
  client: Config.DATABASE.client,
  connection: {
    host: Config.DATABASE.connection.host,
    port: Config.DATABASE.connection.port,
    user: Config.DATABASE.connection.user,
    password: Config.DATABASE.connection.password,
    database: Config.DATABASE.connection.database
  }
  // client: 'mysql',
  // connection:{
  //   host:'localhost',
  //   user:'root' ,
  //   password:'',
  //   database:'tips-test',
  //   charset:'utf8'
// },
})

module.exports = Db
