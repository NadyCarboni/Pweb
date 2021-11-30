const prompt = require('prompt-sync')();



// não esquecer de instalar

// npm install prompt-sync



function saudacao(nome) {

    console.log(' OI ' + nome);

}



function entradaNome(callback) {

    var nome = prompt('Digite seu nome:');

    callback(nome);

}



entradaNome(saudacao);