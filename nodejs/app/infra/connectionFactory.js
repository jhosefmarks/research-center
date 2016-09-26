'use strict'

let mysql = require('mysql')

function createDBConnection () {
  if (!process.env.NODE_ENV || process.env.node === 'dev') {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'master',
      database: 'casadocodigo_nodejs'
    })
  }

  if (process.env.NODE_ENV === 'test') {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'master',
      database: 'casadocodigo_nodejs_test'
    })
  }
}

module.exports = () => createDBConnection
