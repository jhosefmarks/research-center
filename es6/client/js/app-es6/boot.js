import {currentInstance} from './controllers/NegociacaoController.js'
import {} from './polyfill/fetch.js'
// import {} from '/polyfill/es6'

let negociacaoController = currentInstance()

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController)
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController)
