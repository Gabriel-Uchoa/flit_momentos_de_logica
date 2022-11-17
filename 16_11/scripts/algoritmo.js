var qtdParticipantes = 0
var populacaoTotal = 0
var salarioMedio = 0
var salario = 0

function processaDados(valorSalario, numFilhos) {
    if (qtdParticipantes > 1) {
        salario = salario + valorSalario
    } else {
        salario = valorSalario
    }

    populacaoTotal = qtdParticipantes + numFilhos
    salarioMedio = salario / qtdParticipantes
    continuarOuParar()
}

function promptInt(mensagem) {
    var msg = mensagem;
    while (true) {
        var ret = parseInt(prompt(msg));
        if ((ret > 0) && (!isNaN(ret))) {
            return ret
        } else {
            msg = mensagem + "\n Digite apenas números Positivos:";
        }

    }
}
function coletaDados() {
    var valorSalario = promptInt("Informe o seu salário:")
    var numFilhos = promptInt("Informe a quantidade de filhos:")
    processaDados(valorSalario, numFilhos)

}

function continuarOuParar() {
    var pesquisa = confirm("Continuar com pesquisa:")
    if (pesquisa == true) {
        qtdParticipantes = qtdParticipantes + 1
        coletaDados()
    }
    if (pesquisa == false) {
        return (
            console.log(`Quantidade de Entrevistados: ${qtdParticipantes}`),
            console.log(`População total (Entrevistados+filhos): ${populacaoTotal}`),
            console.log(`Salario Médio (Salario Total / Qtd Entrevistados): ${salarioMedio}`)
        )
    }
}

continuarOuParar();

