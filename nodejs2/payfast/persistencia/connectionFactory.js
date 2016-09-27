'use strict'

let mysql = require('mysql')

function createDBConnection () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'master',
    database: 'payfast'
  })
}

module.exports = () => createDBConnection
