/* 1 Crie um objeto do tipo curso que tenha os seguintes atributos:

nome
p1
p2
media
Usando o setter insira o nome do curso, p1 e p2. 
Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" 
Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua média.*/


let curso = {

    
    get nome() {
        return this.nome1
        
    },
    set nome(value) {
        this.nome1 = value
        
    },
    get p12(){
        return this.p1
    },
    set p12(i){
        this.p1=i
    },
    get p22(){
        return this.p2
    },
    set p22(i){
        this.p2=i
    },
    get media1(){
        if (this.p1===0){
            return "full stack" + "A nota da p1 foi 0, não vai ser possível fazer uma média";
        } 
        return "full stack " + (this.p1+this.p2)/2
        
    }
}

curso.p1= 9
curso.p2= 4
console.log(curso.media1)


/*2 Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.*/

let tv = {
    canal:"",
    volume:"",
    ligada:"",
}
tvf= function(liga, desliga, mudaDeCanal, aumentaVolume, diminuiVolume){
    this.liga= liga,
    this.desliga=desliga,
    this.mudaDeCanal=mudaDeCanal,
    this.aumentaVolume=aumentaVolume,
    this.diminuiVolume=diminuiVolume;

}
    



/* 3 Refaça o exercício da TV utilizando uma função construtora*/
function tv(canal, volume, ligada) {
        this.canal = canal
        this.volume = volume
        this.ligado = ligada

    }

let b = new tv1 (2,20,true)
console.log(this.tv1)

//Refaça o exercício da TV utilizando a sintaxe de classe (class).
class tv2 {
    constructor(canal, volume, ligada ){
        
        this.canal = canal
        this.volume = volume
        this.ligado = ligada


    }
  
}
let a = new tv2(13,5,true,false)
console.log(tv2)