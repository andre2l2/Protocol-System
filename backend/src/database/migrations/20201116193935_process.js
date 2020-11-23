
exports.up = function(knex) {
    return knex.schema.createTable('process', (table) => {
        table.increments('id').primary().notNullable();
        table.integer('number').notNullable();
        table.integer('year').notNullable();
        table.string('fullName').notNullable();
        table.integer('CEP').notNullable();
        table.string('district').notNullable();
        table.string('street').notNullable();
        table.integer('house_number').notNullable();
        table.string('complement').notNullable();
        table.integer('phone_1').notNullable();
        table.integer('phone_2');
        table.string('email').notNullable();
        table.string('subject').notNullable();
        table.string('plus');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('process');
};
