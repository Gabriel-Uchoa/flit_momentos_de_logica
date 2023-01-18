function generationSign(primeiroNome, meioNome, ultNome, data, genero) {
    var placaFinal = ""

    if (ultNome.length >= 5) {
        for (let i = 0; i < 5; i++) {
            placaFinal = placaFinal + ultNome[i]
        }
    } else {
        var count = 0
        placaFinal = ultNome
        while (count < (5 - ultNome.length)) {
            placaFinal = placaFinal + 9
            count = count + 1
        }
    }

    return placaFinal
}

//console.log(generationSign("Jonh", "James", "Smith", "01-Jan-2000", "M"))
console.log(generationSign("Jonh", "James", "Smi", "01-Jan-2000", "M"))