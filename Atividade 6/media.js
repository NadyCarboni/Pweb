// const btn = document.getElementById('calcular');

// calcular = function(e) {
    
// const nota1 = parseFloat(document.getElementById('nota1').value);
// const nota2 = parseFloat(document.getElementById('nota2').value);
// const nota3 = parseFloat(document.getElementById('nota3').value);
// const nome = document.getElementById('nome').value;
//  if(nome === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
//      alert('Por favor, insira preencha o formulário com todos os dados');
//  } else {
//      let media;

//      media = (nota1 + nota2 + nota3) / 3;

//      alert("O aluno(a) " + nome + " ficou com a média: " + media.toFixed(2));
//  }

    
// e.preventDefault();
// }


// btn.addEventListener('click', calcular);



// variaveis da interface 

const btn = document.getElementById('calcular');







// funções
calcular = function(e) {
const nota1 = parseFloat(document.getElementById('nota1').value);
const nota2 = parseFloat(document.getElementById('nota2').value);
const nota3 = parseFloat(document.getElementById('nota3').value);
const nome = document.getElementById('nome').value;

const container = document.getElementById('container');

let media = ((nota1 + nota2 + nota3) /3).toFixed(2);

if (nome === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert('Por favor, insira preencha o formulário com todos os dados')
}else{
    const nota = document.createElement('div');
    nota.classList += "container border rounded mb-2";
    nota.innerHTML = `
    <h4>Nome: ${nome}</h4>
    <p>Nota 1: ${nota1}</p>
<p>Nota 2: ${nota2}</p>
<p>Nota 3: ${nota3}</p>
    <h4>Media= ${media}</h4> `

    

    container.appendChild(nota);
}


    e.preventDefault();
}


// eventos 
btn.addEventListener('click', calcular);