export class ListaNegociacoes {
    constructor () {
        this._negociacoes = []
        this._ordenadoPor = 'data'
        this._ascendente = true
    }

    adiciona (negociacao) {
        this._negociacoes.push(negociacao)
        this.ordena(this._ordenadoPor, true)
    }

    get negociacoes () {
        return [].concat(this._negociacoes)
    }

    esvazia () {
        this._negociacoes = []
    }

    get volumeTotal() {
       return this._negociacoes.reduce((total, n) => total + n.volume, 0.0)
    }

    ordena (coluna, manterOrientacaoAtual) {
        if (this._ordenadoPor !== coluna) {
            this._ascendente = true
        } else if (!manterOrientacaoAtual) {
            this._ascendente = !this._ascendente
        }

        if (this._ascendente) {
            this._negociacoes.sort((a, b) => a[coluna] - b[coluna])
        } else {
            this._negociacoes.sort((a, b) => b[coluna] - a[coluna])
        }

        this._ordenadoPor = coluna
    }
}
