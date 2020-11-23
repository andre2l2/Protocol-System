const connection = require('../connections');

module.exports = {
    async list(req, res) {
        const process = await connection('process').select('*');
        return res.json(process);
    },

    async create(req, res) {

        const {
            number,
            year,
            fullName,
            CEP,
            district,
            street,
            house_number,
            complement,
            phone_1,
            phone_2,
            email,
            subject,
            plus
        } = req.body;

        await connection('process').insert({
            number,
            year,
            fullName,
            CEP,
            district,
            street,
            house_number,
            complement,
            phone_1,
            phone_2,
            email,
            subject,
            plus
        })

        res.json({
            menssage: 'ok'
        })
    },

    async filter(req, res) {
        const filter = req.params;

        const process = await connection('process')
            .select('*')
            .where({
                number: `${filter.number}`, 
                year: filter.year
            });
            
        return res.json(process);
    }
}