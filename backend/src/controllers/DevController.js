// o controller sera apenas um objeto que pode ser exportado
// a api do github é publica e tem um objeto json do usuario com os dados dele
// axios : pacote para fazer requisições em apis externas
// no mvc o controller nao pode ter mais que os cinco metodos fundamentais, se vai fazer um metodo que fuja disso deve-se fazer um novo controller
// yarn add cors para acessar a app de qualquer lugar, qualquer endereço
const axios = require('axios');
// para armazenar as informações no banco de dados
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                {_id: {$ne: user}},
                {_id: {$nin: loggedDev.likes}},
                {_id: {$nin: loggedDev.dislikes}},
            ],
        })
        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({user:username});

        if (userExists){
            return res.json(userExists);
        }
        // o axios.get é um metodo assincrono, ele demora para executar
        const response = await axios.get(`https://api.github.com/users/` + username);
        const { name, bio, avatar_url } = response.data;
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar: avatar_url
        });
        // utilizando desestruturaçao
        
        return res.json(dev);
    }
};