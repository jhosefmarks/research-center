import {HttpService} from './HttpService.js'
import {ConnectionFactory} from './ConnectionFactory.js'
import {NegociacaoDao} from '../dao/NegociacaoDao.js'
import {Negociacao} from '../models/Negociacao.js'

export class NegociacaoService {
    constructor() {
        this._http = new HttpService()
    }

    obterNegociacoesDaSemana () {
        return this._http.get('/negociacoes/semana')
            .then(negociacoes =>
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana')
            })
    }

    obterNegociacoesDaSemanaAnterior () {
        return this._http.get('/negociacoes/anterior')
            .then(negociacoes =>
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana anterior')
            })
    }

    obterNegociacoesDaSemanaRetrasada () {
        return this._http.get('/negociacoes/retrasada')
            .then(negociacoes =>
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana retrasada')
            })
    }

    obterNegociacoes () {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(negociacoes =>
            negociacoes.reduce((todas, semana) => todas.concat(semana)))
        .catch(erro => {
            throw new Error('Não foi possível obter as negociações')
        })
    }

    cadastra (negociacao) {
        return ConnectionFactory
            .getConnection()
            .then(conexao => new NegociacaoDao(conexao))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação cadastrada com sucesso')
            .catch(erro => {
                console.log(erro)
                throw new Error("Não foi possível adicionar a negociação")
            })
    }

    lista () {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                console.log(erro)
                throw new Error('Não foi possível obter as negociações')
            })
    }

    apagaTodas() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(erro => {
                console.log(erro)
                throw new Error('Não foi possível obter as negociações')
            })
    }

    importa (listaAtual) {
        return this
            .obterNegociacoes()
            .then(negociacoes =>
                negociacoes.filter(negociacao =>
                    !listaAtual.some(negociacaoExistente =>
                        JSON.stringify(negociacao) === JSON.stringify(negociacaoExistente)
                    )
                )
            )
            .catch(erro => {
                console.log(erro)
                throw new Error("Não foi possível importas as negociaçoes")
            })
    }
}
