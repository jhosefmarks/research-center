function MaiorEMenor() {
    const pegaMenor = () => menor
    const pegaMaior = () => maior

    let menor
    let maior

    this.encontra = encontra
    this.pegaMaior = pegaMaior
    this.pegaMenor = pegaMenor

    function encontra (nums) {
        menor = Number.MAX_VALUE;
        maior = Number.MIN_VALUE;

        nums.forEach(num => {
            if (num < menor) {
                menor = num
            }

            if (num > maior) {
                maior = num
            }
        })
    }
}
