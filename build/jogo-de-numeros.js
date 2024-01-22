"use strict";
class Gerador {
    numero = Math.floor(Math.random() * 100);
    constructor() {
        let numero = Math.floor(Math.random() * 100);
    }
    get mostraNum() {
        return this.numero;
    }
}
const gerar = new Gerador().mostraNum;
console.log(gerar);
