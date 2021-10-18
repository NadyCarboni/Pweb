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

}

function ContaCorrente(saldoEspecial) {
    this.nomeCorrent = nomeCorrent;
    this.banco = banco;
    this.nConta = nConta;
    this.saldo = saldo;

    this.saldoEspecial = saldoEspecial;
}

function ContaPoupanca(juros, dataVenc) {
    this.nomeCorrent = nomeCorrent;
    this.banco = banco;
    this.nConta = nConta;
    this.saldo = saldo;
    
    this.juros = juros;
    this.dataVenc = dataVenc;

}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();



