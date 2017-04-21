
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('author', function(table){
      table.increments('id').primary(),
      table.string('name').notNullable()
    }),

    knex.schema.createTable('genre', function(table){
      table.increments('id').primary(),
      table.string('name').notNullable()
    }),

    knex.schema.createTable('book_author', function(table){
      table.integer('user_id').notNullable(),
      table.integer('name').notNullable()
    }),

    knex.schema.createTable('book_genre', function(table){
      table.integer('user_id').notNullable(),
      table.integer('name').notNullable()
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
