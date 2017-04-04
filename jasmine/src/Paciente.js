function Paciente(nome, idade, peso, altura) {
    this.imprime = () => alert(nome + " tem " + idade)
    this.batimentos = () => idade * 365 * 24 * 60 * 80
    this.imc = () => peso / (altura * altura)
}
