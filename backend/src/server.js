// o express é uma funcao que quando chamada cria um novo servidor

// mongoose facilita usar usar o banco de dados usando javascript

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

// para arquivos criados no sistema o caminho precisa ser dito
const routes = require('./routes');

server.use(routes);

server.listen(3333);