// a importação, instanciação e a porta do server express.
const express = require('express');
const app = express();
const port = 8383;

// rota get com parâmetros na raiz da URL, aonde user id e book id são parâmetros diferentes e a resposta é uma string mostrando os valores desses identificadores.
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});