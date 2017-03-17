
exports.up = function( knex, Promise ) {
  return Promise.all([
    knex.schema.createTable('users', function( table ){
      table.increments('id').primary(),
      table.string('full_name'),
      table.string('username'),
      table.string('password')
    }),

    knex.schema.createTable('shopping_cart', function( table ){
      table.increments('id').primary(),
      table.string('shipping_method'),
      table.timestamps(true, true)
    }),

    knex.schema.createTable('user_shopping_cart', function( table ){
      table.integer('user_id'),
      table.integer('shopping_cart_id')
    }),

    knex.schema.createTable('shopping_cart_items', function(table){
      table.integer('shopping_cart_id'),
      table.integer('item_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users'),
  knex.schema.dropTable('shopping_cart'),
  knex.schema.dropTable('user_shopping_cart'),
  knex.schema.dropTable('shopping_cart_items')
};
