victory = 101;
defeat = 0;

balance = victory - defeat;
rank = defineRank(victory,defeat);

console.log("O Herói tem de saldo de " + balance + " e está no nível de " + rank + ".");

function defineRank (victory, defeat){
    balance = victory - defeat;

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