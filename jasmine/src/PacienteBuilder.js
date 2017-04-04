function PacienteBuilder () {
    let nome = "Guilherme"
    let idade = 28
    let peso = 72
    let altura = 1.80

    this.constroi = constroi
    this.comNome = comNome
    this.comIdade = comIdade
    this.comPeso = comPeso
    this.comAltura = comAltura

    function constroi () {
        return new Paciente(nome, idade, peso, altura)
    }

    function comNome (valor) {
        nome = valor
        return this
    }

    function comIdade (valor) {
        idade = valor
        return this
    }

    function comPeso (valor) {
        peso = valor
        return this
    }

    function comAltura (valor) {
        altura = valor
        return this
    }
}
