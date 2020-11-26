const connection = require('../connections');
const memory = require('../../test/memory');
const crypto = require('crypto');

module.exports = {
    async list(req, res) {
        const filer = req.body;
        const hash = crypto.randomBytes(15).toString('hex');

        const result = await connection('users')
            .select('*')
            .where({
                user: `${filer.user}`,
                password: `${filer.password}`
        })

        const { id, user, fullName, registration } = result[0];
        const userConected = {
            id,
            user,
            fullName,
            registration,
            hash
        }

        memory.push(userConected);

        return res.json(userConected);
    }
}