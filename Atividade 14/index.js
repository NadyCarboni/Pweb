const enviar = document.getElementById("enviar");

const validar = function (e) {
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  const comentario = document.getElementById("comentario").value;
  const sim = document.getElementById("sim");
  let controle = 0;
  if (nome.length < 10) {
    alert("Seu nome está muito pequeno");
    controle += 1;
  }
  if (comentario.length < 20) {
    alert("Por favor escreva algo relevante e que tenha mais de 20 caracteres");
    controle += 1;
  }

  const re = /^([a-zA-Z0-9_\=\.]+)@([a-zA-Z0-9_\=\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email)) {
    alert("Insira um email válido");
    controle += 1;
  }
  if (controle > 0) {
    alert("Preencha seus dados corretamente");
  } else {
    if (sim.checked) {
      alert("Que bom que voltou!");
    } else {
      alert("Volte sempre!");
    }
  }

  e.preventDefault();
};

enviar.addEventListener("click", validar);
