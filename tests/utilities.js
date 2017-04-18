import chai, { expect } from 'chai'
import * as utilities from '../src/database/queries/utilities'

describe('utilities', () => {

  const seedData = [
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

  beforeEach( () =>
    utilities.deleteAll('genre')
      .then( _ =>
        Promise.all( seedData.map( (data) =>
          utilities.createRecord('genre', data) )
        )
      )
  )

  it('is an object', () =>
    expect(utilities).to.be.a('object')
  )

  describe('createRecord()', () => {
    it('inserts a new record into a table', () => {
      return utilities.createRecord( 'genre', {name: 'dance'} )
      .then( res => expect(res.name).to.be.equal('dance') )
    })
  })

  describe('findRecord()', () => {
    it('finds a particular record in a table', () => {
      return utilities.findRecord( 'genre', 'name', 'fitness' )
      .then( res => expect(res.name).to.be.equal('fitness') )
    })
  })

  describe('findAll()', () => {
    it('returns all columns in a given table', () => {
      return utilities.findAll( 'genre' )
      .then( res => expect(res.length).to.equal(3))
    })
  })

  describe('updateRecord()', () => {
    it('updates a given record', () => {
      return utilities.updateRecord( 'genre', 'name', 'horror', {name: 'scary'} )
      .then( res => expect(res.name).to.equal('scary'))
    })
  })

  describe('deleteRecord()', () => {
    it('returns all columns in a given table', () => {
      return utilities.deleteRecord('genre', 'name', 'horror')
      .then( _ => utilities.findAll('genre'))
      .then(res => expect(res.length).to.equal(2))
    })
  })

  describe('deleteAll()', () => {
    it('returns all columns in a given table', () => {
      return utilities.deleteAll( 'genre' )
      .then( _ => utilities.findAll('genre'))
      .then(res => expect(res.length).to.equal(0))
    })
  })


})
