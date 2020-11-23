
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary().notNullable();
        table.string('user').notNullable();
        table.string('fullName').notNullable();
        table.string('password').notNullable();
        table.integer('registration').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

