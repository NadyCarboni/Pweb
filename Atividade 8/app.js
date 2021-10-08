// media idade
// pessoa mais velha
// pessoa mais nova
// quantidade de pessoas responderam péssimo
// porcentagem otimo e bom
// mulheres
// homens


const enviar = document.getElementById('enviar');

//contadores
let submitValue = 0;
let countFem = 0;
let countMasc = 0;
let somaIdade = 0;
let countOtimo = 0;
let countBom = 0;
let countPessimo = 0;
let mediaIdade;
let porcentOtimo = 0;
let porcentBom = 0;


var atualizarEstat = function(e){
    const idade = document.getElementById('idade').value;
    const radioFem = document.getElementById('radioFem');
    const radioMasc = document.getElementById('radioMasc');
    const otimo = document.getElementById('otimo');
    const bom = document.getElementById('bom');
    const regular = document.getElementById('regular');
    const pessimo = document.getElementById('pessimo');
   

    if(isNaN(idade) || idade =='' ){ // verifica se idade está vazio
        alert("Preencha o formulário corretamente");
    } else {
       
        if (radioFem.checked) {
        
            if(otimo.checked) {
                
                submitValue += 1; // numero de vezes que o form foi enviado
                countFem += 1; // numero de vezes que o form foi enviado
                countOtimo += 1;
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                // armazenar no storage
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countFem',countFem);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);

                alert('Voto adicionado!');
                
            } else if(bom.checked){
                submitValue += 1;
                countFem += 1;
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                countBom += 1;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countFem',countFem);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');
            }else if(regular.checked){
                submitValue += 1;
                countFem += 1;
               
                somaIdade += parseInt(idade);

                mediaIdade = somaIdade/submitValue;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
               localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countFem',countFem);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');
            }else if(pessimo.checked){
                submitValue += 1;
                countFem += 1;
               
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                countPessimo += 1;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countFem',countFem);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('countPessimo',countPessimo);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');
            } else {
                // valição opinião
                alert("Preencha o formulário corretamente");
            }

        } else if (radioMasc.checked){
            if(otimo.checked) {
                submitValue += 1; // numero de vezes que o form foi enviado
                countMasc += 1; // numero de vezes que o form foi enviado
                countOtimo += 1;
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countMasc',countMasc);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
            
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');

            } else if(bom.checked){
                submitValue += 1;
                countMasc += 1;
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                countBom += 1;
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
               
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countMasc',countMasc);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');

            }else if(regular.checked){
                submitValue += 1;
                countMasc+= 1;
                
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countMasc',countMasc);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                alert('Voto adicionado!');
                
               
            }else if(pessimo.checked){
                submitValue += 1;
                countMasc+= 1;
                
                somaIdade += parseInt(idade);
                mediaIdade = somaIdade/submitValue;
                countPessimo+= 1;
                porcentOtimo = ((parseInt(countOtimo) /submitValue) * 100 ).toFixed(0) + '%';
                porcentBom = ((parseInt(countBom) /submitValue) * 100 ).toFixed(0) + '%';
                localStorage.setItem('submitValue',submitValue);
                localStorage.setItem('countMasc',countMasc);
                localStorage.setItem('mediaIdade',mediaIdade);
                localStorage.setItem('countPessimo',countPessimo);
                localStorage.setItem('porcentOtimo',porcentOtimo);
                localStorage.setItem('porcentBom',porcentBom);
                 alert('Voto adicionado!');
            } else {
                // validação opinião
                alert("Preencha o formulário corretamente");
            }
        } else {
            // validação sexo
        alert("Preencha o formulário corretamente");
        }
        
       



    }

e.preventDefault();

}
enviar.addEventListener('click', atualizarEstat);


