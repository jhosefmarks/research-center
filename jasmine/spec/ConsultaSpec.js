describe ("Consulta", function () {
    let guilherme

    beforeEach (() => guilherme = new PacienteBuilder().constroi())

    describe ("Consultas que são retornos", function () {
        it ("nao deve cobrar nada se a consulta for um retorno", function () {
            let consulta = new Consulta(guilherme, [], true, true)

            expect(consulta.preco()).toEqual(0)
        })
    })

    describe ("Consultas que são particulares", function () {
        it ("deve cobrar 25 por cada procedimento comum", function () {
            let consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false)

            expect(consulta.preco()).toEqual(50)
        })

        it ("deve dobrar o preco da consulta particular", function () {
            let consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false)

            expect(consulta.preco()).toEqual(50 * 2)
        })
    })

    describe ("Consultas por um convênio", function () {
        it ("deve cobrar preco especifico dependendo do procedimento", function () {
            let consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false)

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32)
        })
    })
})
