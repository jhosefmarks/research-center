class View {

    constructor (elemento) {
        this._elemento = elemento;
    }

    template(model) {
        throw new Error('Método deve ser implementado pela classe filha');
    }

    update (model) {
        this._elemento.innerHTML = this.template(model);
    }

}