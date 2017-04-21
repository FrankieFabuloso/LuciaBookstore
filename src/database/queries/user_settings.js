import * as utilities from './utilities'

// NOTE: should I do hashing and salting here?
const addNewUser = ( data ) =>
  utilities.createRecord( 'users', data )

const getPasswordByUserName = ( username ) =>
  utilities.findRecord( 'users', 'username', username )

const getUserByID = ( id ) =>
  utilities.findRecord( 'users', 'id', id )

const getUserByUsername = ( username ) =>
  utilities.findRecord( 'users', 'username', username )

const updateUserPassword = ( id, password ) =>
  utilities.updateRecord( 'users', 'id', id, {password} )


const updateUserUsername = ( id, username ) =>
  utilities.updateRecord( 'users', 'id', id, {username} )

const updateUserFullName = ( id, first_name, last_name ) =>
  utilities.updateRecord( 'users', 'id', id, {first_name, last_name} )

const deleteUser = ( username ) =>
  utilities.deleteRecord( 'users', 'username', username )

const truncateUsersTable = () =>
  utilities.deleteAll( 'users' )

export {
  addNewUser,
  getPasswordByUserName,
  getUserByUsername,
  updateUserPassword,
  updateUserUsername,
  updateUserFullName,
  deleteUser,
  truncateUsersTable
}
