const request = require('supertest')

const server = require('./server')

describe('server.js', () => {
  describe('GET /', () => {
    // returns a promise
    it('returns 200 OK', () => {
      // make a GET request to the '/' endpoint on the server
      return request(server).get('/').then(res => {
        // assert that we get an http status code 200
        expect(res.status).toBe(200)
      })
    })

    // uses async/await
    it("should return { api: 'up' }", async () => {
      const res = await request(server).get('/')

      expect(res.body.api).toBe('up')
      expect(res.body).toEqual({ api: 'up' })
    })

    // uses done callback fn
    it('returns JSON', done => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i)
          done()
        })
    })
  })
})