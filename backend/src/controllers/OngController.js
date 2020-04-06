const crypto = require('crypto'); //modulo de criptografia da id de cada ong criada
const connection = require('../database/connection'); //comunicação com o banco de dados

module.exports = {
    //rota de listagem
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    //rota de criação
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        const result = await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        //console.log(result);

        return response.json({id});
    }

};
