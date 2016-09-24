class NegociacaoService {
    
    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana () {
        
        return this._http.get('/negociacoes/semana')
            .then(negociacoes => 
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana')
            });        
    }

    obterNegociacoesDaSemanaAnterior () {
        return this._http.get('/negociacoes/anterior')
            .then(negociacoes => 
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana anterior')
            }); 
    }

    obterNegociacoesDaSemanaRetrasada () {
        return this._http.get('/negociacoes/retrasada')
            .then(negociacoes =>
                negociacoes.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))
            ).catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana retrasada')
            });
    }

    obterNegociacoes () {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(negociacoes => 
            negociacoes.reduce((todas, semana) => todas.concat(semana)))
        .catch(err => {
            throw new Error('Não foi possível obter as negociações')
        });
    }
}