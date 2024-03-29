'use strict'

let express = require('express')
let consign = require('consign')
let bodyParser = require('body-parser')
let expressValidator = require('express-validator')

module.exports = () => {
  let app = express()

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  app.use(expressValidator())

  consign()
   .include('controllers')
   .into(app)

  return app
}
