const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate()
  })

  it('should set environment to testing', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  describe('insert()', () => {
    it('should insert hobbits into the db', async () => {
      // insert a record
      await Hobbits.insert({ name: 'Gaffer' })

      let hobbits = await db('hobbits')

      // assert the record was inserted
      expect(hobbits).toHaveLength(1)
    })

    it('should insert hobbits into the db', async () => {
      // insert a record
      const [id] = await Hobbits.insert({ name: 'Gaffer' })

      let hobbit = await db('hobbits')
        .where({ id })
        .first()

      // assert the record was inserted
      expect(hobbit.name).toBe('Gaffer')
    })
  })
})