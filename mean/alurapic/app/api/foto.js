'use strict'

let mongoose = require('mongoose')

module.exports = function(app) {
  let api = {};

  // solicitando o modelo 'Foto'
  let model = mongoose.model('Foto')

  api.lista = (req, res) => {
    model.find()
      .then(fotos => {
        res.json(fotos)
      }, error => {
        console.log(error)
        res.sendStatus(500)
      })
  }

  api.buscaPorId = (req, res) => {
    model.findById(req.params.id)
      .then(foto => {
        if (!foto) {
          throw new Error('Foto não encontrada')
        }
        res.json(foto)
      }, error => {
        console.log(error)
        res.sendStatus(500)
      })
  }

  api.removePorId = (req, res) => {
    model.remove({'_id': req.params.id})
      .then(() => {
        res.sendStatus(200)
      }, error => {
        console.log(error)
        res.sendStatus(500)
      })
  }

  api.adiciona = (req, res) => {
    model.create(req.body)
      .then(foto => {
        res.json(foto)
      }, error => {
        console.log(error)
        res.sendStatus(500)
      })
  }

  api.atualiza = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
      .then(foto => {
        res.json(foto)
      }, error => {
        console.log(error)
        res.sendStatus(500)
      })
  }

  return api
}
