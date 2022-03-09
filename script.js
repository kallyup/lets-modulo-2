const pessoa = {
    nome: "deb",
    idade:23,
    cumprimentaPessoa(nome = ""){
        return console.log("seja bem vindo: " + nome);
    }

}
const mensagem =  pessoa.cumprimentaPessoa()

const counter = {
    count: 0,
    next: function(){
        return this.count++;

    }
}
console.log(counter.next())
console.log(counter.count);
console.log(counter.next())

/*
conseguimos chamar função de algumas formas
chamanda de função (function invocation)
chamada de método(method invocation)
chamada de construtr(construtor invocation)
chamada indireta (indirect Invocation)*/

/*invocação de m´rtodo
quando chama ométodo do obejte o j aponta o this pa o objeto que possui o método

let carro= {
    marca: "fox",
    getMarca:function(){
        return this.marca;
    }
}
let moto= {
    marca:"kawazaki"
}
let marca = carro.getMarca;
console.log(marca());

let marcaMoto = carro.getMarca.bind(moto);

console.log(marcaMoto())*/

//chamada de construtor

function carro(placa, marca){
    this.placa= placa;
    this.marca= marca;
}
// criar uma função dentro da função contrutora

carro.prototype.getPlaca = function(){
    return this.placa
}
let carro1 = new carro("1234","fox")
console.log(carro1)