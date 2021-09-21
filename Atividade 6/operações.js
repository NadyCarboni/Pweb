const btnSomar = document.getElementById('Somar');
const btnSubtrair= document.getElementById('Subtrair');
const btnMultiplicar = document.getElementById('Multiplicar');
const btnDividir = document.getElementById('Dividir');
const btnResto = document.getElementById('Resto');




btnSomar.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2)) {
        alert("Preencha todos os campos");
    } else{
   let valor = numero1 + numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});


btnSubtrair.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2)) {
        alert("Preencha todos os campos");
    } else{
   let valor = numero1 - numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});

btnMultiplicar.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2)) {
        alert("Preencha todos os campos");
    } else{
   let valor = numero1 * numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});

btnDividir.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2) || numero2 === 0) {
        alert("Preencha todos os campos");
    } else{
   let valor = numero1 / numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});

btnResto.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2) ) {
        alert("Preencha todos os campos corretamente");
    } 
    
    
    else{
   let valor = numero1 % numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});