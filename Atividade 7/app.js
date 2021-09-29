// pedra -> tesoura
// tesoura -> papel
// papel -> pedra

/* 
    FUNÇÕES: 
          --- Mostrar regras -> Mostra regras ao clicar no botão;
          --- Fechar regras -> display: none;
          --- Escolha -> Usuário escolher o que ele quer;
          --- Escolha do pc -> animação adicioal, dar a ideia que está acontecendo algo pro usuário;
          --- Disputa -> faz o jogo em so;
          --- Mostrar resultado na UI -> YOU WIN/YOU LOSE ;
          --- Score -> Cont para contar as vezes que ganhou (ganhando +1/perdendo -1);
          --- Jogar de novo -> Volta para a função de escolha quando clica no botão também.

*/


var abrirRegras = document.getElementById('mostrarRegras');
var close = document.getElementById('close');
var rules = document.getElementById('regras');

mostrarRegras.addEventListener('click', function(){
    regras.style.opacity="1";
    
    regras.style.display= 'flex';
    
})

close.addEventListener('click', function(){
    regras.style.opacity="0";
    regras.style.display = "none";
    regras.style.transition = "5s";
    
});


// Evento para o usuário escolher

var btn = document.getElementsByTagName('button');
const btnPedra = document.getElementById('pedra');
const btnPapel = document.getElementById('papel');
const btnTesoura = document.getElementById('tesoura');
var choice = document.getElementById('choice');
btnPapel.addEventListener('click', function(){ 
    
    escolhaUser = btnPapel.value;
    escolhaPC();
    
    torneio(escolhaPC, escolhaUser);
});

btnPedra.addEventListener('click', function(){ 
     escolhaUser = btnPedra.value;
     escolhaPC();
    torneio(escolhaPC, escolhaUser);
});

btnTesoura.addEventListener('click', function(){ 
     escolhaUser = btnTesoura.value;
     escolhaPC();
    torneio(escolhaPC, escolhaUser);
});

// PC escolhe

escolhaPC = function(){
    var val = parseInt(Math.random() * 3 + 1);
     switch (val){
       case 1: escolhaPc = 'pedra';
       break;
       case 2: escolhaPc = 'tesoura';
       break;
       case 3: escolhaPc = 'papel';
       break;
     }

 }

 // PEDRA PAPEL TESOURA

torneio = function(escolhaPC, escolhaUser) {
   let uiResult;
   let classColor;
    switch (escolhaUser) {
        
        case 'pedra': {
            if(escolhaPc === 'pedra') {
            result = 'empate';
            uiResult = "Empate! Tente de novo!"
            classColor = 'yellow'
             } else if (escolhaPc === 'tesoura'){
            result = 'ganhou';
            uiResult = "Parabéns, você ganhou!!";
            classColor = 'green';

            } else if (escolhaPc === 'papel') {
            result = 'perdeu';
            uiResult = "Oops, você perdeu. Tente de novo!";
            classColor = 'red';
        }
           break;
        }
        case 'tesoura': {
            if(escolhaPc === 'pedra') {
            result = 'perdeu';
            uiResult = "Oops, você perdeu. Tente de novo!";
            classColor = 'red'
            } else if (escolhaPc === 'tesoura'){
            result = 'empate';
            uiResult = "Empate! Tente de novo!";
            classColor = 'yellow';
            } else if (escolhaPc === 'papel') {
            result = 'ganhou';
            uiResult = "Parabéns, você ganhou!!";
            classColor = 'green';
            }
            break;
        }

        case 'papel': {
            if(escolhaPc === 'pedra') {
            result = 'ganhou';
             uiResult = "Parabéns, você ganhou!!";
             classColor = 'green';
            } else if (escolhaPc === 'tesoura'){
            result = 'perdeu';
            uiResult = "Oops, você perdeu. Tente de novo!"
            classColor = 'red'
            } else if (escolhaPc === 'papel') {
            result = 'empate';
            uiResult = "Empate! Tente de novo!"
            classColor = 'yellow'
            }
            break;
        }
    }

    console.log(escolhaUser,escolhaPc, result); 

    setTimeout(function(){
        choice.innerHTML = `<div id="carregando" data-aos="zoom-in-up" data-aos-duration="1000"><h2>Seu adversário está escolhendo...</h2>
        <img src="./Spin-1s-200px (3).svg" alt=""></div>`; 
        choice.style.backgroundImage = " none";
    }, 500)
    
    
    setTimeout(function() {

        choice.innerHTML = ` 
        <div id="Result" data-aos="zoom-in-up" >
  <div id="versus">
    <div class="you-pc">
      <h3>
        Você escolheu:
      </h3>
      <button class="${escolhaUser} no-transform"disabled></button>
    </div>

    <div class="you-pc">
      <h3>
        Seu adversário escolheu:
      </h3>
      <button class="${escolhaPc} no-transform"disabled></button>

    </div>
   
  </div>

  <div class="resultado">
    <h2 class="${classColor}">${uiResult}</h2>
    
  </div>
  <a href="" id="PlayAgain">Jogar novamente</a>
</div>`; 

choice.style.backgroundImage = " none";

score(result);


document.getElementById("PlayAgain").addEventListener('click', function(e) {
    document.location.reload(true)

e.preventDefault();}
);
    
   
    
}, 1500)



   
   
}



// Resultado

score = function (result) {
    
   let span =  document.querySelector('.score-span');
   
   

    if (localStorage.getItem('score') === null) {
        let cont = 0;
       span.textContent = cont;
       localStorage.setItem('score', cont);
       
    } else {

        let cont = localStorage.getItem('score');

        switch (result) {
            case 'ganhou':{
            cont = parseInt(cont);
             cont = cont +1
            break;
         }
            case 'empate': {
                cont = parseInt(cont);
             cont = cont;
            break;
         }
            case 'perdeu': {
                cont = parseInt(cont);
                cont = cont -1;
             break;}
        }
         if(cont < 0) {
             cont = 0;
         }
         
    
    span.textContent = cont;
    localStorage.setItem('score', cont);
    }
   
   
    
    
    
}

score('empate');





 


