const connection = require('../connections');

module.exports = {
    async list(req, res) {
        const users = await connection('users').select('*');
        return res.json(users);
    },

    async create(req, res) {

        const {
            user,
            fullName,
            password,
            registration
        } = req.body;

        await connection('users').insert({
            user,
            fullName,
            password,
            registration
        })

        res.json({
            menssage: 'Created!',
            user: user,
            name: fullName,
            registration: registration
        })
    },

    async filter(req, res) {
        const filter = req.params;

        const users = await connection('users')
            .select('*')
            .where({
                user: `${filter.user}`
        })

        return res.json(users);
    }
}