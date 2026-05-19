🟢 O Nodejs é fascinante, ele veio pra revolucionar o mundo javascript, quebrando barreiras e permitindo com que ele seja executado, agora fora do navegador. <br>
🟢 Sua instalação é bem simples, basta ir até o site oficial do nodejs -> [https://nodejs.org/en]. <br>
🟢 Após a instalação, para ver se está instalado e também sua versão, no Prompt de Comando digite :  'node -v'. <br>
🟢 Para arquivo .js, no node rodamos ele pelo 'node [arquivo .js]'. <br>
🟢 No Node.js tem os módulos, sendo uma forma de você separar cada arquivo, pra ter uma função específica, como na calculadora neste repositório, e todos esses arquivos, são exportados pelo: 'module.exports = função módulo'. <br>
🟢 Cada função módulo é uma variável, que tem uma função como seu valor e nela tem seus parâmetros como a,b que são 2 valores qualquer, pra fazer as operações aritméticas básicas ali. <br>
🟢 No Calculator.js, cada 'var Func = require('./função módulo');' é um acesso a cada uma dessas função módulo, dos arquivos.js externos correspondentes. <br>
🟢 Nele temos o módulo http, que nos permite criar um servidor http usando a função 'createServer() + a função listen()', dentro de ambos passamos: pro create server a requisição e a resposta, e pro listen
a porta que ele vai usar da internet pra rodar, no caso a porta selecionada é a 8081. <br>
🟢 Definimos como variável inicial como o http, com ele usamos o require pra acessar o módulo http do node, e depois passamos essa mesma variável pra fazer o acesso dessas 2 funções. <br>
🟢 Ao criarmos o server, usamos o return pra retornar uma resposta ao acesso desse server, no caso 'server running', e como mensagem no console 'server started!'. <br>
🟢 No server2.js e nos outros servers, todos usam o express, ele é um framework para construção de apps web do nodejs, ele carrega consigo, rotas, as rotas possuem parâmetros e as querys também. <br>
🟢 Nos parâmetros de rotas e nas queries, são partes da URL q serão usados para pegar as informações de cada um, nas rotas temos o GET, PUT, POST E DELETE. <br>
🟢 GET -> Significa que essa rota é usada para solicitar dados a um tipo determinado de fonte. <br>
🟢 POST -> Envia essas informações solicitas. <br>
🟢 PUT -> Atualiza determinado site ou serviço com novas informações. <br>
🟢 DELETE -> Remove ou apaga algum dado. <br>
🟢 Nos parâmetros de Query (req.query): O framework Express facilita o nosso trabalho ao capturar a Query String (o texto bruto que vem na URL após a ?) e convertê-la (fazer o parse) em um objeto JavaScript. Dessa forma, em vez de tratarmos texto puro, podemos acessar as informações diretamente como propriedades do objeto req.query.
