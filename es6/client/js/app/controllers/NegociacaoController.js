class NegociacaoController {

    constructor () {
        let self = this;
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia', 'ordena');

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
    }

    adiciona (event) {
        event.preventDefault();      

        try {
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            
            this._limpaFormulario();
        } catch (err) {
            this._mensagem.texto = err;
        }   
    }

    importaNegociacoes () {

        new NegociacaoService().obterNegociacoes()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            }).catch(err => this._mensagem.texto = err);

    }

    apaga () {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociaçoes apagadas com sucesso';

        this._inputData.focus();
    }

    ordena (coluna) {
        this._listaNegociacoes.ordena(coluna);
        
        this._ordemAtual = coluna;
    }
 
    _criaNegociacao () {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario () {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}