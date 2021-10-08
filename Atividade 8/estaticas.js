let enviadoVezes,qntdeFem, qntdeMasc, mediaIdades, porcentagemOtimo, porcentagemBom, contadorPessimo;

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

if (localStorage.getItem('mediaIdades') === null)  {
    mediaIdades = 0;
} else {
    mediaIdades= parseInt(localStorage.getItem('mediaIdades'));
}


if (localStorage.getItem('contadorPessimo') === null)  {
    contadorPessimo = 0;
} else {
    contadorPessimo = parseInt(localStorage.getItem('contadorPessimo'));
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






const estatisticas = document.getElementById('estatisticas');
estatisticas.innerHTML = `  <div class="row my-2">
<p class="col lead text-center">Média da idade dos que responderam: <span class="text-primary">${mediaIdades}</span></p>
<p class="col lead text-center">Mulheres que responderam a pesquisa: <span class="text-primary">${qntdeFem}</span></p> 
<p  class="col lead text-center">Homens que responderam a pesquisa: <span class="text-primary">${qntdeMasc}</span></p> 
</div>

<p class="lead">Porcentagem que acharam o filme bom: </h6><div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemBom} ;" aria-valuenow="0" aria-valuemin="0039" aria-valuemax="100"></div>

</div>

<p class="lead mt-3">Porcentagem que acharam o filme ótimo: </h6><div class="progress">
<div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemOtimo};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p  class="col lead text-center my-3">Pessoas que acharam o filme péssimo <span class="text-primary">${contadorPessimo}</span></p> 

`;

