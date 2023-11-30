class dadosDoPlayer {
	constructor(nome, idade, tipo) {
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
        console.log(`Seu nome é ${this.nome}, você tem ${this.idade} anos e seu tipo é ${this.tipo}`);
        }
}

let gabrielNinja = new dadosDoPlayer("Gabriel", "17", "Ninja");


class atacar {
	constructor(tipo, ataque) {
    	this.tipo = tipo;
        this.ataque = "";
        
        if (this.tipo === "mago") {
        	this.ataque = "usando magia"}
        else if (this.tipo === "guerreiro") {
        	this.ataque = "usando espada" }
        else if (this.tipo === "monge") {
        	this.ataque = "usando artes marciais"}
        else if (this.tipo === "ninja") {
        	this.ataque = "usando shuriken" }
            
        console.log(`o ${this.tipo} atacou ${this.ataque}`)
        
    }
}

let gabrielMonge = new atacar("monge");

