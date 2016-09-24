class CodigoHelper {

    constructor () {
        throw new Error('CodigoHelper não pode ser instanciada');
    }

    static valida (codigo) {
        return /\D{3}-\D{2}-\d{2}/.test(codigo);
    }

}