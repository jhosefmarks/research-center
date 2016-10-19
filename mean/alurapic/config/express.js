'use strict'

let express = require('express')
let consign = require('consign')
let bodyParser = require('body-parser')

let app = express()

app.set('secret', 'homemavestruz')

// configurando o middleware body-parser
app.use(bodyParser.json())

app.use(express.static('./public'))

consign({cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes')
  .into(app)

module.exports = app
