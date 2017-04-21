import chai, { expect } from 'chai'
import * as user from '../src/database/queries/user_settings'

describe( 'user_setting' , () => {

  it('exists', () =>
    expect( user ).to.be.a('object')
  )

  describe( 'addNewUser()', () => {
    it( 'registers a new user to the site', () => {
      const newUserGuy = {
        first_name: 'new',
        last_name: 'dude',
        username: 'theNewGuy',
        salt: 'pepper',
        password: 'passwordnew'
      }
      return user.addNewUser( newUserGuy )
        .then( person =>
          expect(person.first_name).to.equal('new')
        )
    })
  })

  describe( 'getPasswordByUserName', () => {
    it( 'gets the password for a particualr Username', () => {
      return user.getPasswordByUserName('CheesyBreath12')
        .then( user => expect( user.password ).to.equal( 'password1' ) )
    })
  })

  describe( 'getUserByUsername', () => {
    it( 'gets the users info of a user by username', () => {
      const newUserGuy = {
        first_name: 'new',
        last_name: 'dude',
        username: 'theNewGuy',
        salt: 'pepper',
        password: 'passwordnew'
      }
      return user.addNewUser(newUserGuy)
        .then( newUser => user.getUserByUsername(newUser.username) )
        .then( newUserInfo =>
           expect(newUserInfo.username).to.equal(newUserGuy.username) )
    })
  })

  describe( 'updateUserPassword', () => {
    it( 'changes the users password by id', () => {
      const newUserGuy = {
        first_name: 'new',
        last_name: 'dude',
        username: 'theNewGuy',
        salt: 'pepper',
        password: 'passwordnew'
      }
      return user.addNewUser(newUserGuy)
        .then( newUser =>
          user.updateUserPassword(newUser.id, "Passfarts")
        )
        .then( newUserInfo => {
          expect( newUserInfo.password ).to.equal('Passfarts')
        })
      })
  })

// TODO: write better tests
  describe( 'deleteUser', () => {
    it( 'removes user from the database by username', () => {

    })
  })
})
