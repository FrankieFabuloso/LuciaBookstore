import * as user_settings from '../queries/user_settings'
import * as user_shopping from '../queries/user_shopping'
import * as utilities from '../queries/utilities'

const seedUsers = [
  {
    first_name: 'Cheese',
    last_name: 'Balls',
    username: 'CheesyBreath12',
    salt: 'pepper',
    password: 'password1'
  },
  {
    first_name: 'Lemon',
    last_name: 'Head',
    username: 'SourPatchKid',
    salt: 'pepper',
    password: 'password2'
  },
  {
    first_name: 'Fart',
    last_name: 'Mouth',
    username: 'HeWhoSmeltIt',
    salt: 'pepper',
    password: 'password3'
  },
  {
    first_name: 'Frankie',
    last_name: 'Rocha',
    username: 'FrankieFabuloso',
    salt: 'pepper',
    password: 'poop'
  }
]

const seedGenre = [
  {
    name: 'horror'
  },
  {
    name: 'romance'
  },
  {
    name: 'fitness'
  }
]

const seedAuthor = [
  {
    name: 'author man'
  },
  {
    name: 'writter lady'
  },
  {
    name: 'pen pal dude'
  }
]

exports.up = function(knex, Promise) {
  return Promise.all(
    seedUsers.map( data => user_settings.addNewUser( data ) )
    .concat( seedGenre.map( data => utilities.createRecord('genre', data) ) )
    .concat( seedAuthor.map( data => utilities.createRecord('author', data) ) )
  )
};

exports.down = function(knex, Promise) {
  return knex.raw('DELETE FROM users')
};
