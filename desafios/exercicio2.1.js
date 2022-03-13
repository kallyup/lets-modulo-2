//Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. 
//Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).


class cnh{
    constructor(pais,idade,categoria){
    this.pais=pais,
    this.idade=idade,
    this.categoria=categoria

}
podeTirarCarteira(){
    if (this.pais==="BR"&&this.idade>17){
        return this.pais + this.idade + this.categoria+ " pode tirar carteira"
    }else if((this.pais==="US" || this.pais==="CA")&& this.idade>15){
        return this.pais + this.idade +" pode tirar carteira"
    }else if((this.pais==="RU") && (this.idade>20)){
        return this.pais + this.idade +" pode tirar carteira"
    }else{
       
        return "ainda não" 
    }
}
}
let a = new cnh("US", 25, "A")
console.log(a.podeTirarCarteira())