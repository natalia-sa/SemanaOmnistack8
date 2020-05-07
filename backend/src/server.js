// o express é uma funcao que quando chamada cria um novo servidor

// mongoose facilita usar usar o banco de dados usando javascript

// utilizando socket.io

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();

//extraindo o servidor http dentro do express e unindo ao servidor webSocket
const server = require('http').Server(app);

// esse require retorna uma funcao que recebe um servidor
const io = require('socket.io')(server);

const connectedUsers = {

};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://natalia:novasenha2@omnistack-oq54w.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());

// para arquivos criados no sistema o caminho precisa ser dito
const routes = require('./routes');

app.use(routes);

server.listen(3333);