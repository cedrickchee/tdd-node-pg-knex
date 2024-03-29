exports.up = function (knex) {
    return knex.schema.createTable('shows', function (table) {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('channel').notNullable();
        table.string('genre').notNullable();
        table.integer('rating').notNullable();
        table.boolean('explicit').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('shows');
};
