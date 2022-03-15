/**
 * Crie uma (ou mais) classe para representar
 * um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 * 
 */

class banco{
    constructor(nome, saldo, senha,saida, entrada){
        this.nome=nome,
        this.saldo=saldo,
        this.senha=senha,
        this.saida=saida,
        this.entrada=entrada;
        this.logui=[]
    }
    saque = (valor) => {
        
        if (valor <= this.balance){
            this.balance -= valor;
            this.logui.push(-valor);
            return "Valor retirado: -" + valor;
        }else{
            return "Valor indisponível";
        }
    }
    deposito = (valor) => {
        this.balance += valor;
        return "valor adicionado com sucesso: +" + valor;
    }
    extrato = () => {
        for(var i = 0;i < length(this.logui);i++) {
            console.log(this.logui[i]);
        }
    /*saldo1 () {
        let saldo = (this.entrada + this.saldo) - this.saida
        return `Saldo: R$ ${saldo}`;
        
    }
    Saque = (valorSacar, senhaSacar) => {
        if(valorSacar <= saldoTotal) {
            if(senhaSacar === senha) {
                
            }else{
                return 'Você tem apenas mais duas chances'
            }
            
        }else{
            return 'Saldo insuficiente'
        }*/
      
    }
    
}
let saldoTotal= []
let b1 = new banco("pedro", 100, 1234, 50, 400)
console.log(b1)
console.log(b1.saque())
console.log(b1.deposito())
console.log(b1.extrato())


// class banco propriedades = nome, saldo, senha,saida, entrada
//métodos = saque, saldo, extrato, depósito, transferência, emprestimo

//class filho pf propiedade = nome, saldo, senha, saida, entrada, limiteEmprestimo, cpf, Rg
//métodos = saque, saldo, extrato, depósito, transferência, emprestimo

//class neto pj propiedade = nome, saldo, senha, saida, entrada, limiteEmprestimo, cnpj, nomeEmpresa
//métodos = saque, saldo, extrato, depósito, transferência, emprestimo