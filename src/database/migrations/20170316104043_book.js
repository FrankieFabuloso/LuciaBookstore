exports.up = function(knex, Promise) {

  return knex.schema.createTable('book', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('language').defaultTo('spanish');
    table.string('image_url');
    table.string('buy_link');
    table.integer('average_rating');
    table.integer('rate_count');
    table.integer('page_count');
    table.decimal('price').notNullable();
    table.timestamps(true, true)
   });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book')
};
