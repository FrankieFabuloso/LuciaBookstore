import chai, { expect } from 'chai'
import * as user_setting from '../src/database/queries/user_settings'
import * as user_shopping from '../src/database/queries/user_shopping'

describe( 'user_shopping' , () => {

  const myUser = {
    first_name: 'Cheese',
    last_name: 'Balls',
    username: 'CheesyBreath12',
    salt: 'pepper',
    password: 'password1'
  }


  describe( 'createNewCart', () => {
    it( 'creates a new shopping cart for the user', () => {
      user_setting.getUserByUsername('FrankieFabuloso')
      .then( foundUser =>  user_shopping.createNewCart(foundUser.id) )
      .then( newCart => expect(typeof(newCart)).not.be.a('object') )
    })
  })

// TODO: make more tests plz
})
