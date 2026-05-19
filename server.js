const express = require('express'); // importa a biblioteca express;
const app = express(); // cria uma instância desse express;
const port = 8080; // define a porta de escuta;

// define a rota GET para a raiz do servidor express;
app.get('/', (req, res) => {
  res.send('Hello from world.');
});

// inicia o servidor em si;
app.listen(port, () => {
  console.log(`Servidor iniciado | Porta de escuta [${8080}]`);
});