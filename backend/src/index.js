/*
Para executar o servidor no terminal
> node index.js
ou
>nodemon index.js
e agora
>nodemon src/index.js ou >npm start
*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //tem que passar o caminho do arquivo
    //para que o node não pense que ele é um pacote, e sim um arquivo
    // ./ -> é para a mesma pasta
    // ../ -> é para recuar um diretório

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
Rota / Recurso
*/
/*
Metodos HTTTP:
GET: Buscar/Listar uma informação no Back-end
POST: Cria uma informação no Back-end
PUT: Altera uma informação no Back-end
DELETE: Deletar uma informação bo Back-end
*/
/*
Tipos de Parãmetros:
Query Params: Parãmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parãmetros utilizados para indentificar recursos
Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
*/
/*
Banco de Dados
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB
*/
/*
Driver: SELECT * FROM users
Query Builder: table('users')
*/
