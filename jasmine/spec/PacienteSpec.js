describe ("Paciente", function () {
    it ("deve calcular o IMC", function () {
        let guilherme = new Paciente("Guilherme", 28, 72, 1.82)

        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82))
    })

    it ("deve calcular os batimentos", function () {
        let guilherme = new Paciente("Guilherme", 28, 72, 1.82)

        expect(guilherme.batimentos()).toEqual(28 * 365 * 24 * 60 * 80)
    })
})
