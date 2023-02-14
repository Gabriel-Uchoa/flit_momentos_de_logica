
function rock_paper_scissors(move_1, move_2) {
    if (move_1 == "pedra") {
        if (move_2 == "pedra") {
            return ("A pedra esmagou o lagarto, jogador 1 ganhou!!")
        }
        if (move_2 == "tesoura") {
            return ("A pedra esmagou a tesoura, jogador 1 ganhou!!")
        }
        if (move_2 == "pedra") {
            return ("Empate!")
        }
    } else if (move_1 == "papel") {
        if (move_2 == "pedra") {
            return ("O papel cobriu a pedra, jogador 1 ganhou!")
        }
        if (move_2 == "spock") {
            return ("O papel refutou spock, jogador 1 ganhou!!")
        }
        if (move_2 == "papel") {
            return ("Empate!")
        }
    } else if (move_1 == "tesoura") {
        if (move_2 == "papel") {
            return ("A tesoura cortou o papel, jogador 1 ganhou!")
        }
        if (move_2 == "lagarto") {
            return ("A tesoura cortou o lagarto, jogador 1 ganhou!")
        }
        if (move_2 == "tesoura") {
            return ("Empate!")
        }
    } else if (move_1 == "lagarto") {
        if (move_2 == "spock") {
            return ("O lagarto envenenou o spock, jogador 1 ganhou!")
        }
        if (move_2 == "papel") {
            return ("O lagarto comeu o papel, jogador 1 ganhou!")
        }
        if (move_2 == "lagarto") {
            return ("Empate!")
        }
    } else if (move_1 == "spock") {
        if (move_2 == "tesoura") {
            return ("O spock esmaga tesoura, jogador 1 ganhou!")
        }
        if (move_2 == "pedra") {
            return ("O spock vaporiza a pedra, jogador 1 ganhou!")
        }
        if (move_2 == "spock") {
            return ("Empate!")
        }
    }

    if (move_2 == "pedra") {
        if (move_1 == "pedra") {
            return ("A pedra esmagou o lagarto!")
        }
        if (move_1 == "tesoura") {
            return ("A pedra esmagou a tesoura!")
        }
        if (move_1 == "pedra") {
            return ("Empate!")
        }
    } else if (move_2 == "papel") {
        if (move_1 == "pedra") {
            return ("O papel cobriu a pedra, jogador 2 ganhou!")
        }
        if (move_1 == "spock") {
            return ("O papel refutou spock, jogador 2 ganhou!")
        }
        if (move_1 == "papel") {
            return ("Empate!")
        }
    } else if (move_2 == "tesoura") {
        if (move_1 == "papel") {
            return ("A tesoura cortou o papel, jogador 2 ganhou!")
        }
        if (move_1 == "lagarto") {
            return ("A tesoura cortou o lagarto, jogador 2 ganhou!")
        }
        if (move_1 == "tesoura") {
            return ("Empate!")
        }
    } else if (move_2 == "lagarto") {
        if (move_1 == "spock") {
            return ("O lagarto envenenou o spock, jogador 2 ganhou!")
        }
        if (move_1 == "papel") {
            return ("O lagarto comeu o papel, jogador 2 ganhou!")
        }
        if (move_1 == "lagarto") {
            return ("Empate!")
        }
    } else if (move_2 == "spock") {
        if (move_1 == "tesoura") {
            return ("O spock esmaga tesoura, jogador 2 ganhou!")
        }
        if (move_1 == "pedra") {
            return ("O spock vaporiza a pedra, jogador 2 ganhou!")
        }
        if (move_1 == "spock") {
            return ("Empate!")
        }
    }

}

console.log(rock_paper_scissors("spock", "tesoura"))

