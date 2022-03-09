/*> Jaque Laurenti:
1) Crie um objeto de nome aluno e adicione as seguintes propriedades:
nome, matricula e idade.
Crie neste mesmo objeto aluno, uma função que receba como parâmetro o curso do aluno, 
o parâmetro deverá ter um default, 
e adicione esse parâmetro recebido em uma propriedade do objeto aluno.
Retorne o objeto aluno ANTES da chamada da função.
Retorne o objeto aluno APÓS a chamada da função



let aluno= {
    nome:"deb",
    matricula:"1234",
    idade:"23",
    curso:"full stack",
   
    qualCurso(curso=""){
        return console.log(curso + "MUITO LEGAL!")

    },
};
let mensagem = aluno.qualCurso("")

2)Crie um objeto de nome Ave e adicione um atributo de nome espécie.
Dentro do objeto Ave crie uma função, que retorno o atributo espécie.
Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, crie um objeto de nome Peixe
e através do bind faça ele retornar a espécie do objeto peixe.

let ave= {
    especie: "pombo",
    getEspecie:function(){
        return this.especie;
    }
}
let peixe= {
    especie:"carpa"
}

let especie1 = ave.getEspecie.bind(peixe);

console.log(especie1());


3)Crie uma função construtora, para criar um "Aluno".
Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno
através do prototype da função.

Invoque a função e printe o resultado*/


function aluno(nome, idade, email, matricula, curso){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
}

aluno.prototype.qualCurso = function(){
    return this.curso
}

let aluno1 = new aluno("deb","23","xx@gmail","12345","full stack")
console.log(aluno1)
console.log(aluno1.qualCurso())


