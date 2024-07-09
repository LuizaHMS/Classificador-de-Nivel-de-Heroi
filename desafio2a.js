/*## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

//1 ok - 1 função para calcular pontos e 1 função para calcular rank, saida na main
//2 ok - 1 função para os dois, saida na main
//3 ok- função para tudo

let vic = 101;
let def = 0;

let bal = winningBalance(vic,def);
let rankFinal = defineRank(bal);

console.log("O Herói tem de saldo de " + bal + " e está no nível de " + rankFinal + ".");

function winningBalance (victory, defeat){
    let balance = victory - defeat;
    return balance;
}

function defineRank (balance){
    if (balance <= 10){
        rank = "Ferro";
    } else if (balance >= 11 && balance <= 20) {
        rank = "Bronze";
    } else if (balance >= 21 && balance <= 50) {
        rank = "Prata";
    } else if (balance >= 51 && balance <= 80) {
        rank = "Ouro";
    } else if (balance >= 81 && balance <= 90) {
        rank = "Diamante";
    } else if (balance >= 91 && balance <= 100) {
        rank = "Lendário";
    } else if (balance >= 101) {
        rank = "Imortal";
    }

    return rank;
}
