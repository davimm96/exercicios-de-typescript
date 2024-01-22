/*
Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número aleatório entre 1 
e 100. O usuário deve tentar adivinhar o número gerado. O programa deve fornecer dicas ao usuário sobre se o 
número adivinhado é maior ou menor que o número gerado. O jogo deve terminar quando o usuário adivinhar o númer
o corretamente.
*/
/*
lass Cor {
    protected cor: string

    constructor(cor: string) {
        this.cor = cor
    }
}
*/
class Gerador {
    protected numero:number=Math.floor(Math.random()*100)
    constructor() {
        let numero = Math.floor(Math.random()*100)
    }

    get mostraNum() {
        return this.numero
    }
}

const gerar = new Gerador().mostraNum
console.log(gerar)