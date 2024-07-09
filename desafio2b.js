let vic = 101;
let def = 0;

let bal = vic - def;
let rankFinal = defineRank(vic,def);

console.log("O Herói tem de saldo de " + bal + " e está no nível de " + rankFinal + ".");

function defineRank (victory, defeat){
    let balance = victory - defeat;

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