var app = require("./app/config/server");
var texto = require("./modulo1");

var rotaHome = require("./app/routes/home");
rotaHome(app);

var rotaAdicionarUsuario = require("./app/routes/adicionar_usuario");
rotaAdicionarUsuario(app);

var rotaHistoria = require("./app/routes/historia");
rotaHistoria(app);

var rotaCursos = require("./app/routes/cursos");
rotaCursos(app);

var rotaProfessores = require("./app/routes/professores");
rotaProfessores(app);

const porta = 3000;

app.listen(porta, function () {
  console.log(`servidor express carregado na porta ${porta}`);
  console.log(texto);
});
