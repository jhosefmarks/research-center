'use strict'

let express = require('express')
let bodyParser = require('body-parser')
let load = require('express-load')
let expressValidator = require('express-validator')

let app = express()

app.use(express.static('./app/public'))

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(expressValidator())

load('routes', {cwd: 'app'})
  .then('infra')
  .into(app)

module.exports = app
