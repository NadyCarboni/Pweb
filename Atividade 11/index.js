/*----------EXERCICIO 1----------*/

// função construtora

function Retangulo(x, y){
   this.x = x;
   this.y = y;
    // método público
    this.calcArea = function(){ 
        return x * y; 
   }
}

// instanciar

var retangulo = new Retangulo(5,4);

console.log(retangulo.calcArea());

document.write('O retângulo tem as medidas x = ' + retangulo.x + ' y = ' + retangulo.y + ' e sua área é igual a: ' + retangulo.calcArea() + '\n\n\n');



/*----------EXERCICIO 2----------*/

function Conta(nomeCorrent, banco, nConta, saldo) {
    this.nomeCorrent = nomeCorrent;
    this.banco = banco;
    this.nConta = nConta;
    this.saldo = saldo;

    this.setnomeCorrent = function(nome) {
        nomeCorrent = nome;
    }
    this.setBanco = function(nomeBanco) {
        banco = nomeBanco;
    }
    this.setNConta = function(numConta) {
        nConta = numConta;
    }
    this.setSaldo = function(valor) {
        saldo = valor;
    }
    this.getnomeCorrent = function() {
       return nomeCorrent;
    }
    this.getBanco = function() {
        return banco;
    }
    this.getNConta = function() {
       return nConta;
    }
    this.getSaldo = function() {
        return saldo;
    }

}

function ContaCorrente(saldoEspecial) {
    

    this.saldoEspecial = saldoEspecial;
    this.setSaldoEspecial = function(valor) {
        saldoEspecial = valor;
    }
    this.getSaldoEspecial = function() {
        return saldoEspecial;
    }
}

function ContaPoupanca(juros, dataVenc) {
   

    this.juros = juros;
    this.dataVenc = dataVenc;
    this.setJuros = function(valor) {
        juros = valor;
    }
    this.getJuros = function() {
        return juros;
    }
    this.setDataVenc= function(data) {
        dataVenc = data;
    }
    this.getDataVenc = function() {
        return dataVenc;
    }
}



ContaPoupanca.prototype = new Conta();
var contaPoup = new ContaPoupanca();

contaPoup.setnomeCorrent('Alfredo');
contaPoup.setBanco('Banco legal');
contaPoup.setNConta('000');
contaPoup.setSaldo('50');
contaPoup.setDataVenc('22/07/2002');
contaPoup.setJuros('1%');



ContaCorrente.prototype = new Conta();
var contaCor = new ContaCorrente();

contaCor.setnomeCorrent('Rodolfo');
contaCor.setBanco('Banco legal');
contaCor.setNConta('001');
contaCor.setSaldo('40');
contaCor.setSaldoEspecial('22/07/2002');


var texto = 'Conta poupança:<br>Nome: ' + contaPoup.getNConta() + '<br> Banco: ' + contaPoup.getBanco() 
+ '<br>Número conta: ' + contaPoup.getNConta() + '<br>Saldo: ' +  contaPoup.getSaldo() + '<br>Juros: ' 
+ contaPoup.getJuros() + '<br>Data Vencimento: ' + contaPoup.getDataVenc() + '<br><br><br>';


var texto2 = 'Conta Corrente:<br>Nome: ' + contaCor.getNConta() + '<br> Banco: ' + contaCor.getBanco() 
+ '<br>Número conta: ' + contaCor.getNConta() + '<br>Saldo: ' +  contaCor.getSaldo() + '<br>Saldo especial: ' 
+ contaCor.getSaldoEspecial() + '<br><br><br>';



document.getElementById('text').innerHTML = `${texto}` ; 

document.getElementById('text2').innerHTML = `${texto2}` ; 