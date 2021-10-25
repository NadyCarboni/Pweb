var janela = document.querySelector("#janela");

var abrir = document.querySelector("#abrir");

abrir.addEventListener("click", () => {
  janela.innerHTML = `
    <img src="./janela aberta.png" alt="Janela aberta" />
    `;
});

var fechar = document.querySelector("#fechar");
fechar.addEventListener("click", () => {
  janela.innerHTML = `
    <img src="./janela fechada.png" alt="Janela fechada" />
    `;
});

var quebrar = document.querySelector("#quebrar");
quebrar.addEventListener("click", () => {
  janela.innerHTML = `
    <img src="./janela quebrada.png" alt="Janela quebrada" />
    `;
  const audio = document.querySelector("audio");
  audio.play();
});
