import * as utilities from './utilities'

const createNewCart = ( user_id ) =>
  utilities.createRecord( 'shopping_cart', { shipping_method: 'standard'} )
  .then( shoppingCart =>
    utilities.createRecord( 'user_shopping_cart', { user_id, shopping_cart_id: shoppingCart.id } ))

const getLatestShoppingCart = ( user_id ) =>
  knex.raw(`select * from user_shopping_cart join ( select MAX(updated_at) from user_shopping_cart group by user_id) b on user_id = ${user_id} and updated_at = max`)

const getShoppingCartHistory = ( user_id ) =>
  knex.raw(`select * from user_shopping_cart where user_id = ${user_id}`)

const addBookToCart = ( shopping_cart_id, item_id ) =>
  utilities.createRecord( 'shopping_cart_items', { shopping_cart_id, item_id } )

const removeBookFromCart = ( shopping_cart_id, item_id ) =>
  knex.raw(`DELETE FROM shopping_cart_items WHERE shopping_cart_id=${shopping_cart_id} AND item_id=${item_id}`)

const getCartTotal = ( shopping_cart_id ) =>
  knex.raw( `SELECT SUM(price) FROM book JOIN shopping_cart_items ON book.id=item_id WHERE shopping_cart_id=${shopping_cart_id}` )

const getAllCartItems = ( shopping_cart_id ) =>
  knex.raw( `SELECT * FROM book JOIN shopping_cart_items ON book.id=item_id WHERE shopping_cart_id=${shopping_cart_id}` )

const emptyCart = ( shopping_cart_id ) =>
  knex.raw(`DELETE FROM shopping_cart_items WHERE shopping_cart_id=${shopping_cart_id} AND item_id=${item_id}`)


export {
  createNewCart,
  addBookToCart,
  removeBookFromCart,
  getCartTotal,
  getAllCartItems
}
