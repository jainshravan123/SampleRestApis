const index = require('./../../index')
const app = index.app
const request = require('supertest')
const expect = require('chai').expect

describe('Contract Tests', () => {
    it ('get the events of sixth page', (done) => {
        request(app)
            .get('/api/events?page=6')
            .expect(200)
            .then(response => {
                expect(Object.keys(response.body).length).to.equal(4)
                expect(response.body.page).to.equal(6)
                expect(response.body.total).to.equal(115)
                expect(response.body.totalPages).to.equal(12)
                expect(response.body.data.length).to.equal(10)
                done()
            })
    })

    it ('get the events of tenth page', (done) => {
        request(app)
            .get('/api/events?page=10')
            .expect(200)
            .then(response => {
                expect(Object.keys(response.body).length).to.equal(4)
                expect(response.body.page).to.equal(10)
                expect(response.body.total).to.equal(115)
                expect(response.body.totalPages).to.equal(12)
                expect(response.body.data.length).to.equal(10)
                done()
            })
    })

    it ('get the events of zero number page', (done) => {
        request(app)
            .get('/api/events?page=0')
            .expect(200)
            .then(response => {
                expect(Object.keys(response.body).length).to.equal(4)
                expect(response.body.page).to.equal(0)
                expect(response.body.total).to.equal(115)
                expect(response.body.totalPages).to.equal(12)
                expect(response.body.data.length).to.equal(0)
                done()
            })
    })

    it ('get the events when the page number is in negative', (done) => {
        request(app)
            .get('/api/events?page=-3')
            .expect(200)
            .then(response => {
                expect(Object.keys(response.body).length).to.equal(4)
                expect(response.body.page).to.equal(-3)
                expect(response.body.total).to.equal(115)
                expect(response.body.totalPages).to.equal(12)
                expect(response.body.data.length).to.equal(0)
                done()
            })
    })

    it ('get the events when no page is provided', (done) => {
        request(app)
            .get('/api/events')
            .expect(200)
            .then(response => {
                expect(Object.keys(response.body).length).to.equal(3)
                expect(response.body.total).to.equal(115)
                expect(response.body.totalPages).to.equal(12)
                expect(response.body.data.length).to.equal(115)
                done()
            })
    })

})