const dictionary = {
    "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
}

function convertNumber(stringToConvert) {
    var stringUpper = stringToConvert.toUpperCase()
    for (let i = 0; i < stringUpper.length; i++) {
        console.log(stringUpper[i])
        console.log(dictionary[stringUpper[i]])
    }
}

convertNumber("XV")