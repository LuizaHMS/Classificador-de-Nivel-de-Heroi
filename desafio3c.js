class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.atack;
    }

    defineAtack() {
        switch (this.type) {
            case 'guerreiro':
                this.atack = "espada";
                break;
            case 'mago':
                this.atack = "magia";
                break;
            case 'monge':
                this.atack = "artes marciais";
                break;
            case 'ninja':
                this.atack = "shuriken";
                break;
            default:
                this.atack = "nada tadinhe";
                break;
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