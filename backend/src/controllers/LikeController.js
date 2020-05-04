// quando dou um like estou criando uma informação nova, por isso sera do tipo post
// vai passar na rota o id do desenvolvedor que voce quer dar like
// para acessar um parametro que vem atraves da rota usa params
// no header da aplicação se mandam informações que nao tem tanto a ver com a funcionalidade feita, para simbolizar a autenticação
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        
        const { devId } = req.params;
        const { user } = req.headers;
        // buscando as duas instancias no banco de dados
        const loggedDev = await Dev.findById(user);
        // usuario alvo do like
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'dev not exists'});
        }
        if(targetDev.likes.includes(loggedDev._id)){
            console.log('deu match');
        }
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};