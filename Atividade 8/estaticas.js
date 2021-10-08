let countFem, countMasc, mediaIdade, porcentOtimo, porcentBom, countPessimo;

if (localStorage.getItem('mediaIdade') === null)  {
    mediaIdade = 0;
} else {
    mediaIdade = localStorage.getItem('mediaIdade');
}

if (localStorage.getItem('countMasc') === null){
    countMasc = 0;
} else {
    countMasc = localStorage.getItem('countMasc');
}

if (localStorage.getItem('countFem') === null){
    countFem = 0;
} else {
    countFem = localStorage.getItem('countFem');
}

if (localStorage.getItem('porcentOtimo') === null){
    porcentOtimo = 0;
} else {
    porcentOtimo= localStorage.getItem('porcentOtimo');
}

if (localStorage.getItem('porcentBom') === null){
    porcentBom = 0;
} else {
    porcentBom = localStorage.getItem('porcentBom');
}

if (localStorage.getItem('countPessimo') === null){
    countPessimo = 0;
} else {
    countPessimo = localStorage.getItem('countPessimo');
}





const estatisticas = document.getElementById('estatisticas');
estatisticas.innerHTML = `  <div class="row my-2">
<p class="col lead text-center">Média da idade dos que responderam: <span class="text-primary">${mediaIdade}</span></p>
<p class="col lead text-center">Mulheres que responderam a pesquisa: <span class="text-primary">${countFem}</span></p> 
<p  class="col lead text-center">Homens que responderam a pesquisa: <span class="text-primary">${countMasc}</span></p> 
</div>

<p class="lead">Porcentagem que acharam o filme bom: </h6><div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentBom} ;" aria-valuenow="0" aria-valuemin="0039" aria-valuemax="100"></div>

</div>

<p class="lead mt-3">Porcentagem que acharam o filme ótimo: </h6><div class="progress">
<div class="progress-bar bg-success" role="progressbar" style="width: ${porcentOtimo};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p  class="col lead text-center my-3">Pessoas que acharam o filme péssimo <span class="text-primary">${countPessimo}</span></p> 

`;

