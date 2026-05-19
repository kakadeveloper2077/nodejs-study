// acesso a biblioteca, a instância e a definição da porta do server express.
const express = require('express');
const app = express();
const port = 8282;

// essa rota GET, solicita a URL raiz search, e a execução é uma resposta mostrando parâmetro de consulta, ao parâmetro q e sua categoria, caso não seja informada, ela retorna 'none'.
app.get('/search', (req, res) => {
  const { q, category } = req.query;
  res.send(`Search query: ${q}, Category: ${category || 'none'}`);
});

// inicialização do server.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});