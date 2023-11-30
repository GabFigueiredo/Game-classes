class dadosDoPlayer {
	constructor(nome, idade, tipo) {
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
        console.log(`Seu nome é ${this.nome}, você tem ${this.idade} anos e seu tipo é ${this.tipo}`);
        }
}

let gabrielNinja = new dadosDoPlayer("Gabriel", "17", "Ninja");

