'use strict'

let mysql = require('mysql')

function createDBConnection () {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
    console.log('dev')
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

  if (process.env.NODE_ENV === 'production') {
    let url = process.env.CLEARDB_DATABASE_URL
    let grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/)

    return mysql.createConnection({
      host: grupos[3],
      user: grupos[1],
      password: grupos[2],
      database: grupos[4]
    })
  }
}

module.exports = () => createDBConnection
