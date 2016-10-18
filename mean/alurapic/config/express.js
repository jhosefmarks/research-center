'use strict'

let express = require('express')
let consign = require('consign')
let app = express()

app.use(express.static('./public'))

consign({cwd: 'app'})
  .include('api')
  .then('routes')
  .into(app)

module.exports = app
