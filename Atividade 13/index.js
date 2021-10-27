// variaveis da UI

const textArea = document.getElementById('texto');
// botões
const btnMaiusculo = document.getElementById('btnMaiusculo');
const btnMinusculo= document.getElementById('btnMinusculo');
const btnPrimeiraLetra = document.getElementById('btnPrimeiraLetra');
var contador = document.getElementById('contador');




// eventos
textArea.addEventListener('keyup', function(){
    contador.textContent =  textArea.value.length.toString();
});


btnMaiusculo.addEventListener('click', function(e){

    let textValue = textArea.value.toUpperCase();
    textArea.value = textValue;

    

    e.preventDefault();
});

btnMinusculo.addEventListener('click', function(e){

    let textValue = textArea.value.toLowerCase();
    textArea.value = textValue;
    
    e.preventDefault();
});

btnPrimeiraLetra.addEventListener('click', function(e){
    let palavras =  textArea.value.toLowerCase().split(" ");
    let valor = '';
    for (var i = 0; i< palavras.length; i++) {
       let text = palavras[i].charAt(0).toUpperCase() + palavras[i].substr(1);
       
       valor = valor + text + " ";

    }
    valor=valor.substring(0, valor.length - 1);
    textArea.value = valor;
    e.preventDefault();
});

