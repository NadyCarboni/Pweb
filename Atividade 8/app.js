// media idade
// pessoa mais velha
// pessoa mais nova
// quantidade de pessoas responderam péssimo
// porcentagem otimo e bom
// mulheres
// homens


const enviar = document.getElementById('enviar');

//contadores
let enviadoVezes;
let qntdeFem;
let qntdeMasc;
let somaIdades;
let contadorOtimo;
let contadorBom;
let contadorPessimo;
let mediaIdades;
let porcentagemOtimo;
let porcentagemBom;


// verificar storage
if (localStorage.getItem('enviadoVezes') === null)  {
    enviadoVezes = 0;
} else {
    enviadoVezes = parseInt(localStorage.getItem('enviadoVezes'));
}

if (localStorage.getItem('qntdeFem') === null)  {
    qntdeFem = 0;
} else {
    qntdeFem = parseInt(localStorage.getItem('qntdeFem'));
}
if (localStorage.getItem('qntdeMasc') === null)  {
    qntdeMasc = 0;
} else {
    qntdeMasc = parseInt(localStorage.getItem('qntdeMasc'));
}

if (localStorage.getItem('somaIdades') === null)  {
    somaIdades = 0;
} else {
    somaIdades = parseInt(localStorage.getItem('somaIdades'));
}

if (localStorage.getItem('contadorOtimo') === null)  {
    contadorOtimo = 0;
} else {
    contadorOtimo = parseInt(localStorage.getItem('contadorOtimo'));
}

if (localStorage.getItem('contadorBom') === null)  {
    contadorBom = 0;
} else {
    contadorBom= parseInt(localStorage.getItem('contadorBom'));
}
if (localStorage.getItem('contadorBom') === null)  {
    contadorBom = 0;
} else {
    contadorBom= parseInt(localStorage.getItem('contadorBom'));
}


if (localStorage.getItem('contadorPessimo') === null)  {
    contadorPessimo = 0;
} else {
    contadorPessimo = localStorage.getItem('contadorPessimo');
}

if (localStorage.getItem('porcentagemBom') === null)  {
    porcentagemBom = 0;
} else {
    porcentagemBom = localStorage.getItem('porcentagemBom');
}

if (localStorage.getItem('porcentagemOtimo') === null)  {
    porcentagemOtimo = 0;
} else {
    porcentagemOtimo = localStorage.getItem('porcentagemOtimo');
}



// verifica






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
                
                enviadoVezes += 1; // numero de vezes que o form foi enviado
                qntdeFem += 1; // numero de vezes que o form foi enviado
                contadorOtimo += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                
                alert('Voto adicionado!');

                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                
            } else if(bom.checked){
                enviadoVezes += 1;
                qntdeFem += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                contadorBom += 1;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
               
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                
                    
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                alert('Voto adicionado!');
            }else if(regular.checked){
                enviadoVezes += 1;
                qntdeFem += 1;
               
                somaIdades += parseInt(idade);

                mediaIdades = somaIdades/enviadoVezes;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
              
                alert('Voto adicionado!');
            }else if(pessimo.checked){
                enviadoVezes += 1;
                qntdeFem += 1;
               
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                contadorPessimo += 1;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                    
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                alert('Voto adicionado!');
            } else {
                // valição opinião
                alert("Preencha o formulário corretamente");
            }

        } else if (radioMasc.checked){
            if(otimo.checked) {
                enviadoVezes += 1; // numero de vezes que o form foi enviado
                qntdeMasc += 1; // numero de vezes que o form foi enviado
                contadorOtimo += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                alert('Voto adicionado!');

            } else if(bom.checked){
                enviadoVezes += 1;
                qntdeMasc += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                contadorBom += 1;
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
               
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                    
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                alert('Voto adicionado!');

            }else if(regular.checked){
                enviadoVezes += 1;
                qntdeMasc+= 1;
                
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                    
                localStorage.setItem('enviadoVezes',enviadoVezes);
                localStorage.setItem('qntdeFem',qntdeFem);
                localStorage.setItem('qntdeMasc',qntdeMasc);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('contadorOtimo', contadorOtimo);
                localStorage.setItem('contadorBom', contadorBom);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                alert('Voto adicionado!');
                
               
            }else if(pessimo.checked){
                enviadoVezes += 1;
                qntdeMasc+= 1;
                
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/enviadoVezes;
                contadorPessimo+= 1;
                porcentagemOtimo = ((parseInt(contadorOtimo) /enviadoVezes) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(contadorBom) /enviadoVezes) * 100 ).toFixed(0) + '%';
                console.log(enviadoVezes,
                    qntdeFem,
                    qntdeMasc,
                    somaIdades,
                    contadorOtimo,
                    contadorBom,
                    contadorPessimo,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom
                    )
                
                    localStorage.setItem('enviadoVezes',enviadoVezes);
                    localStorage.setItem('qntdeFem',qntdeFem);
                    localStorage.setItem('qntdeMasc',qntdeMasc);
                    localStorage.setItem('mediaIdades',mediaIdades);
                    localStorage.setItem('somaIdades',somaIdades);
                    localStorage.setItem('contadorOtimo', contadorOtimo);
                    localStorage.setItem('contadorBom', contadorBom);
                    localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                    localStorage.setItem('porcentagemBom',porcentagemBom);
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




// localStorage.setItem('enviadoVezes',enviadoVezes);
//                 localStorage.setItem('qntdeMasc',qntdeMasc);
//                 localStorage.setItem('mediaIdades',mediaIdades);
//                 localStorage.setItem('contadorPessimo',contadorPessimo);
//                 localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
//                 localStorage.setItem('porcentagemBom',porcentagemBom);