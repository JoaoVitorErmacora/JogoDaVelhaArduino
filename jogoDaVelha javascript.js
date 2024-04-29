function main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis
    // 
    // 0: posição vazia
    // 1: jogada na posição do jogador 1
    // 2: jogada na posição do jogador 2
    var velha;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = Array(9);
    var i;

    // Limpar/zerar o tabuleiro
    for (i = 0; i <= 8; i++) {
        tabuleiro[i] = 0;
    }
    var jogador1;

    jogador1 = "jogador 1";
    var jogador2;

    jogador2 = "jogador 2";
    var jogadorDaVez;

    jogadorDaVez = 1;
    var jogada;
    var linha;
    var coluna;

    velha = 1;

    // Iniciar o jogo, definir quem joga primeiro
    do {
        console.log(tabuleiro[0].toString() + tabuleiro[1] + tabuleiro[2]);
        console.log(tabuleiro[3].toString() + tabuleiro[4] + tabuleiro[5]);
        console.log(tabuleiro[6].toString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";

        // Anotar/Registrar a jogada do primeiro jogador
        console.log("Digite a posição da sua peça Jogador" + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');
        validaPosicao(2);

        // simula a função Serial.parseInt()do Arduino
        linha = parseInt(jogada.charAt(0));
        coluna = parseInt(jogada.charAt(2));
        console.log("Linha:" + linha + ",Coluna:" + coluna);

        // Verificar se a posição jogada é válida
        // Converter a jogada texto em inteiro
        if (tabuleiro[3 * linha + coluna] == 0) {
            tabuleiro[3 * linha + coluna] = jogadorDaVez;
            if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                haVencedor = true;
            } else {
                if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {

                    // Verificar jogada ganhadora na coluna
                    haVencedor = true;
                } else {
                    if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {

                        // Verificar jogada ganhadora nas diagonais
                        haVencedor = true;
                    } else {
                        if (jogadorDaVez == 1) {
                            jogadorDaVez = 2;
                        } else {
                            jogadorDaVez = 1;
                        }
                    }
                }
            }
            velha = velha + 1;

            // Anotar e registrar a jogada do segundo jogador
        } else {
            console.log("Posição ocupada, jogue novamente");

            // Informar ao jogador 1 que a posição está preenchida, e ele precisa informar uma posição válida
        }

        // Verificar jogada ganhadora nas linhas
    } while (!haVencedor && velha < 9);
    if (haVencedor) {
        console.log("Parabéns pela a vitória, jogador " + jogadorDaVez);
    } else {
        console.log("Deu velha!");
    }
}

function validaPosicao(entrada) {
    var entradaValida;

    entradaValida = false;
    console.log(entrada.length());
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}
