const express = require('express');
const app = express();
const port = 8080;

// responde para requisições Get na raiz do server.
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// responde para requisições Post na raiz do server.
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// responde para requisições Get para a rota /about no server.
app.get('/about', (req, res) => {
  res.send('About page');
});

// pega todas as outras rotas e retorna um 404.
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// inicia o server em si.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});