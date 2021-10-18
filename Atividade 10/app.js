// Criar objeto aluno de 3 formas diferentes

// Forma 1 - função construtora:

function alunoFC(nome, ra){
    this.nome = nome;
    this.ra = ra;
}

var aluno1 = new alunoFC('Rhysand', '001');

console.log(aluno1);

// Forma 2 - forma literal

var aluno2 = {
    nome: 'Cassian',
    ra: '002'
};

console.log(aluno2);

// Forma 3 - new object

var aluno3 = new Object();
aluno3.nome = 'Azriel';
aluno3.ra = '003';

console.log(aluno3);

// Forma 4 que a professora não pediu, mas queria relembrar

class Aluno {
    constructor(nome,ra){
       this.nome = nome;
       this.ra = ra;
    }
   
};

var aluno4 = new Aluno('Feyre', '004');
console.log(aluno4);

// Mostrar os 3 alunos na UI

document.getElementById('text-aluno1').innerHTML = `
<ul>
<li><strong>Nome:</strong> ${aluno1.nome}</li>
<li><strong>RA:</strong> ${aluno1.ra}</li>
</ul>
`;
document.getElementById('text-aluno2').innerHTML = `
<ul>
<li><strong>Nome:</strong> ${aluno2.nome}</li>
<li><strong>RA:</strong> ${aluno2.ra}</li>
</ul>
`;;
document.getElementById('text-aluno3').innerHTML = `
<ul>
<li><strong>Nome:</strong> ${aluno3.nome}</li>
<li><strong>RA:</strong> ${aluno3.ra}</li>
</ul>
`;;