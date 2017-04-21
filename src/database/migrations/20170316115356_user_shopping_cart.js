
exports.up = function( knex, Promise ) {
  return Promise.all([
    knex.schema.createTable('users', function( table ){
      table.increments('id').primary(),
      table.string('first_name').notNullable(),
      table.string('last_name').notNullable(),
      table.string('username').notNullable(),
      table.string('password').notNullable(),
      table.string('salt').notNullable(),
      table.timestamps(true, true)
    }),

    knex.schema.createTable('shopping_cart', function( table ){
      table.increments('id').primary(),
      table.string('shipping_method').defaultTo('standard').notNullable()
    }),

    knex.schema.createTable('user_shopping_cart', function( table ){
      table.integer('user_id').notNullable(),
      table.integer('shopping_cart_id').notNullable(),
      table.timestamps(true, true)
    }),

    knex.schema.createTable('shopping_cart_items', function(table){
      table.integer('shopping_cart_id').notNullable(),
      table.integer('item_id').notNullable()
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users'),
  knex.schema.dropTable('shopping_cart'),
  knex.schema.dropTable('user_shopping_cart'),
  knex.schema.dropTable('shopping_cart_items')
};
