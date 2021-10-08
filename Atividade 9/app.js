// variaveis da UI
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');

const btnMaiorNum = document.getElementById('maior');
const btnOrdem = document.getElementById('ordem');



var ordenar = function(e) {
    let arrNum = [num1.value,num2.value,num3.value,];
    arrNum.sort((a,b) => {
        return a - b;
    });
 

   num1.value = arrNum[0];
   num2.value = arrNum[1];
   num3.value = arrNum[2];
   
   console.log(arrNum);

    e.preventDefault();
}



var maiorNum = function(e) {

    
    let arrNum = [num1.value,num2.value,num3.value,];

    arrNum.sort((a,b) => {
        return a - b;
    });

    alert('O maior número é: '+ arrNum[2]);
    e.preventDefault();
}

// Eventos
btnOrdem.addEventListener('click', ordenar);
btnMaiorNum.addEventListener('click', maiorNum);