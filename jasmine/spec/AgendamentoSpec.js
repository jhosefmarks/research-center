describe ("Agendamento", function () {
    let agenda
    let gui

    beforeEach (function () {
        agenda = new Agendamento()
        gui = new PacienteBuilder().constroi()
    })

    it ("deve agendar para 20 dias depois", function () {
        let consulta = new Consulta(gui, [], false, false, new Date(2014, 7, 1))
        let novaConsulta = agenda.para(consulta)

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014,7,21).toString())
    })

    it ("deve pular fins de semana", function () {
        let consulta = new Consulta(gui, [], false, false, new Date(2014, 5, 30))
        let novaConsulta = agenda.para(consulta)

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014,6,21).toString())
    })
})
