import {ListaNegociacoes} from '../models/ListaNegociacoes.js'
import {Mensagem} from '../models/Mensagem.js'
import {NegociacoesView} from '../views/NegociacoesView.js'
import {MensagemView} from '../views/MensagemView.js'
import {NegociacaoService} from '../services/NegociacaoService.js'
import {DateHelper} from '../helpers/DateHelper.js'
import {Bind} from '../helpers/Bind.js'
import {Negociacao} from '../models/Negociacao.js'

class NegociacaoController {
    constructor () {
        let self = this

        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._ordemAtual = ''

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona',
            'esvazia',
            'ordena'
        )

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')), 'texto')

        this._negociacaoService = new NegociacaoService()

        this._init()
    }

    _init () {
        this._negociacaoService
            .lista()
            .then(negociacoes =>
                negociacoes.forEach(negociacao =>
                    this._listaNegociacoes.adiciona(
                        new Negociacao(negociacao._data, negociacao._quantidade, negociacao._valor)
                    )
                )
            )
            .catch(erro => {
                this._mensagem.texto = erro
            })

        this.importaNegociacoes()

        setInterval(() => {
            console.log('Importando negociações')
            this.importaNegociacoes()
        }, 15000)
    }

    adiciona (event) {
        event.preventDefault()

        let negociacao = this._criaNegociacao()

        this._negociacaoService
            .cadastra(negociacao)
            .then(mensagem => {
                this._listaNegociacoes.adiciona(negociacao)
                this._mensagem.texto = mensagem
                this._limpaFormulario()
            }).catch(erro => this._mensagem.texto = erro)
    }

    importaNegociacoes () {
        this._negociacaoService
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao)
                this._mensagem.texto = 'Negociações do período importadas'
            }))
            .catch(erro => this._mensagem.texto = erro)
    }

    apaga () {
        this._negociacaoService
            .apagaTodas()
            .then(mensagem => {
                this._listaNegociacoes.esvazia()
                this._mensagem.texto = mensagem
            })
            .catch(erro => this._mensagem.texto = erro)

        this._inputData.focus()
    }

    ordena (coluna) {
        this._listaNegociacoes.ordena(coluna)

        this._ordemAtual = coluna
    }

    _criaNegociacao () {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }

    _limpaFormulario () {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}

let negociacaoController = new NegociacaoController()

export function currentInstance() {
    return negociacaoController
}
