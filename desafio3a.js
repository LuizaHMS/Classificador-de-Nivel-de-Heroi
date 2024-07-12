/* ## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

// class hero, metodo atacar (switch)
// class hero, metodo atacar (if)
// fazer verificador de tipo

class hero {
	constructor(name, age, type) {
		this.name = name;
		this.age = age;
		this.type = type;
		this.atack = this.defineAtack();
	}

	defineAtack() {
		switch (this.type) {
			case 'guerreiro':
				return "espada";
			case 'mago':
				return "magia";
			case 'monge':
				return "artes marciais";
			case 'ninja':
				return "shuriken";
			default:
				return "nada tadinhe";
		}
	}

	actionAtack() {
		console.log(`O ${this.type} atacou usando ${this.atack}.`);
	}
}

let player1 = new hero("Lucas", 52, "guerreiro");
let player2 = new hero("Gustavo", 28, "mago");
let player3 = new hero("Pedro", 26, "monge");
let player4 = new hero("João", 36, "ninja");
let player5 = new hero("Rodrigo", 18, "bruxo");

player1.actionAtack();
player2.actionAtack();
player3.actionAtack();
player4.actionAtack();
player5.actionAtack();