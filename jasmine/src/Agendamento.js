function Agendamento () {
    this.para = para

    function para (consulta) {
        const umDiaEmMilissegundo = 1000 * 60 * 60 * 24
        const vinteDiasEmMillisegundos = umDiaEmMilissegundo * 20

        let novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos)
        while (novaData.getDay() === 0 || novaData.getDay() === 6) {
            novaData = new Date(novaData.getTime() + umDiaEmMilissegundo);
        }

        let novaConsulta = new Consulta(
            consulta.getNome(), consulta.getProcedimentos(),
            consulta.isParticular(), consulta.isRetorno(), novaData)

        return novaConsulta
    }
}
