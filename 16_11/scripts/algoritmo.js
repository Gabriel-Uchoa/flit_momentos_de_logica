var qtdParticipantes = 0

function processaDados(valorSalario, numFilhos) {
    return console.log(valorSalario, numFilhos, qtdParticipantes)
}

function coletaDados() {
    var valorSalario = prompt("Informe o seu salário:")
    var numFilhos = prompt("Informe a quantidade de filhos:")
    processaDados(valorSalario, numFilhos)
}

function continuarOuParar() {
    confirm("Continuar com pesquisa:")

    if (pesquisa == true) {
        qtdParticipantes = qtdParticipantes + 1
        coletaDados()
    }
    else {
        continuarOuParar()
    }
}

var pesquisa = continuarOuParar();

