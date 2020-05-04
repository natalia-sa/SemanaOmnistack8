// pra importar coisas no node usa require
// o express é uma funcao que quando chamada cria um novo servidor
// quando estamos utilizando o conceito de api rest sempre utilizamos o formato json
// banco relacional
// objeto json toda vez que vou cadastrar algo. informações que vem no req.body
// mongoose facilita usar usar o banco de dados usadno so javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
server.use(cors());
server.use(express.json());
//quando é um arquivo criado por nos tem q passar nao so o nome mas tambem o caminho
const routes = require('./routes');
//esse 'use' é coisa do express
server.use(routes);

server.listen(3333);