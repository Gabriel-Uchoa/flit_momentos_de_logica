
function carroMaisCaro(valor1, valor2, valor3, modelo1, modelo2, modelo3) {
    var valorInt1 = parseFloat(valor1)
    var valorInt2 = parseFloat(valor2)
    var valorInt3 = parseFloat(valor3)

    if ((valorInt1 > valorInt2) && (valorInt1 > valorInt3)) {
        return console.log(`Modelo: ${modelo1} tem maior preço`)
    }
    if ((valorInt2 > valorInt1) && (valorInt2 > valorInt3)) {
        return console.log(`Modelo: ${modelo2} tem maior preço`)
    }
    if ((valorInt3 > valorInt1) && (valorInt3 > valorInt2)) {
        return console.log(`Modelo: ${modelo3} tem maior preço`)
    }
}
function carroMaisBarato(valor1, valor2, valor3, modelo1, modelo2, modelo3) {
    var valorInt1 = parseFloat(valor1)
    var valorInt2 = parseFloat(valor2)
    var valorInt3 = parseFloat(valor3)

    if ((valorInt1 < valorInt2) && (valorInt1 < valorInt3)) {
        return console.log(`Modelo: ${modelo1} tem menor preço`)
    }
    if ((valorInt2 < valorInt1) && (valorInt2 < valorInt3)) {
        return console.log(`Modelo: ${modelo2} tem menor preço`)
    }
    if ((valorInt3 < valorInt1) && (valorInt3 < valorInt2)) {
        return console.log(`Modelo: ${modelo3} tem menor preço`)
    }
}
function mediaDosValores(valor1, valor2, valor3) {
    var valorInt1 = parseFloat(valor1)
    var valorInt2 = parseFloat(valor2)
    var valorInt3 = parseFloat(valor3)
    var media = ((valorInt1 + valorInt2 + valorInt3) / 3)
    return console.log(`A média dos preços dos carros são ${media}`)
}

var modeloCar1 = prompt("Informe o modelo carro 1: ")
var anoCar1 = prompt("Informe o ano carro 1: ")
var valorCar1 = prompt("Informe o valor carro 1: ")

var modeloCar2 = prompt("Informe o modelo carro 2: ")
var anoCar2 = prompt("Informe o ano carro 2: ")
var valorCar2 = prompt("Informe o valor carro 2: ")

var modeloCar3 = prompt("Informe o modelo carro 3: ")
var anoCar3 = prompt("Informe o ano carro 3: ")
var valorCar3 = prompt("Informe o valor carro 3: ")

carroMaisCaro(valorCar1, valorCar2, valorCar3, modeloCar1, modeloCar2, modeloCar2)
carroMaisBarato(valorCar1, valorCar2, valorCar3, modeloCar1, modeloCar2, modeloCar2)
mediaDosValores(valorCar1, valorCar2, valorCar3)
