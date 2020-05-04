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
        if (!Array.isArray(loggedDev.dislikes)) {
            loggedDev.dislikes = [];
        }
        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};