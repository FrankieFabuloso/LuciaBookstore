
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('author', function(table){
      table.increments('id').primary(),
      table.string('name')
    }),

    knex.schema.createTable('genre', function(table){
      table.increments('id').primary(),
      table.string('name')
    }),

    knex.schema.createTable('book_author', function(table){
      table.integer('user_id'),
      table.integer('name')
    }),

    knex.schema.createTable('book_genre', function(table){
      table.integer('user_id'),
      table.integer('name')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('author'),
    knex.schema.dropTable('genre'),
    knex.schema.dropTable('book_author'),
    knex.schema.dropTable('book_genre')
  ])
};
