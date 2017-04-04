function Consulta (paciente, procedimentos, particular, retorno, data) {
    this.preco = preco

    this.getNome = () => paciente
    this.getProcedimentos = () => procedimentos
    this.isParticular = () => particular
    this.isRetorno = () => retorno
    this.getData = () => data

    function preco () {
        let precoFinal = 0

        if (retorno) {
            return 0
        }

        procedimentos.forEach(procedimento => {
            if ("raio-x" === procedimento) {
                precoFinal += 55
            } else if ("gesso" === procedimento) {
                precoFinal += 32
            } else {
                precoFinal += 25
            }
        })

        if (particular) {
            precoFinal *= 2
        }

        return precoFinal
    }
}
