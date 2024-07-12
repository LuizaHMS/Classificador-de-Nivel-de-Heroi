class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.atack;
    }

    defineAtack() {
        if (this.type === "guerreiro") {
            this.atack = "espada";
        } else if (this.type === "mago") {
            this.atack = "magia";
        } else if (this.type === "monge") {
            this.atack = "artes marciais";
        } else if (this.type === "ninja") {
            this.atack = "shuriken";
        } else {
            this.atack = "nada tadinhe";
        }

        console.log(`O ${this.type} atacou usando ${this.atack}.`);
    }
}

let player1 = new hero("Lucas", 52, "guerreiro");
let player2 = new hero("Gustavo", 28, "mago");
let player3 = new hero("Pedro", 26, "monge");
let player4 = new hero("João", 36, "ninja");
let player5 = new hero("Rodrigo", 18, "bruxo");

player1.defineAtack();
player2.defineAtack();
player3.defineAtack();
player4.defineAtack();
player5.defineAtack();