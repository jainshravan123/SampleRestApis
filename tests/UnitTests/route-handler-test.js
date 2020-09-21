const routeHandler = require('./../../src/route-handler')
const expect = require('chai').expect
const nodeMocksHttp = require('node-mocks-http')
const events = require('events')

describe('Route Handler', () => {
    it ('get the events of fourth page', (done) => {
        const req = nodeMocksHttp.createRequest({query: {
            page: 4
        }})
        const res = nodeMocksHttp.createResponse({ eventEmitter: events.EventEmitter })
        res.on('end', () => {
            try {
                const paginatedData = res._getData()
                expect(Object.keys(paginatedData).length).to.equal(4)
                expect(paginatedData.page).to.equal(4)
                expect(paginatedData.total).to.equal(115)
                expect(paginatedData.totalPages).to.equal(12)
                expect(paginatedData.data.length).to.equal(10)
                expect(res.statusCode).to.equal(200)
                done()
            } catch(error) {
                done(error)
            }
        })
        routeHandler.getEvents(req, res)
    })

    it ('get the events of tenth page', (done) => {
        const req = nodeMocksHttp.createRequest({query: {
            page: 10
        }})
        const res = nodeMocksHttp.createResponse({ eventEmitter: events.EventEmitter })
        res.on('end', () => {
            try {
                const paginatedData = res._getData()
                expect(Object.keys(paginatedData).length).to.equal(4)
                expect(paginatedData.page).to.equal(10)
                expect(paginatedData.total).to.equal(115)
                expect(paginatedData.totalPages).to.equal(12)
                expect(paginatedData.data.length).to.equal(10)
                expect(res.statusCode).to.equal(200)
                done()
            } catch(error) {
                done(error)
            }
        })
        routeHandler.getEvents(req, res)
    })

    it ('get the events of zero numbered page', (done) => {
        const req = nodeMocksHttp.createRequest({query: {
            page: 0
        }})
        const res = nodeMocksHttp.createResponse({ eventEmitter: events.EventEmitter })
        res.on('end', () => {
            try {
                const paginatedData = res._getData()
                expect(Object.keys(paginatedData).length).to.equal(4)
                expect(paginatedData.page).to.equal(0)
                expect(paginatedData.total).to.equal(115)
                expect(paginatedData.totalPages).to.equal(12)
                expect(paginatedData.data.length).to.equal(0)
                expect(res.statusCode).to.equal(200)
                done()
            } catch(error) {
                done(error)
            }
        })
        routeHandler.getEvents(req, res)
    }) 

    it ('get the events of without passing the page', (done) => {
        const req = nodeMocksHttp.createRequest()
        const res = nodeMocksHttp.createResponse({ eventEmitter: events.EventEmitter })
        res.on('end', () => {
            try {
                const paginatedData = res._getData()
                expect(Object.keys(paginatedData).length).to.equal(3)
                expect(paginatedData.page).to.equal(undefined)
                expect(paginatedData.total).to.equal(115)
                expect(paginatedData.totalPages).to.equal(12)
                expect(paginatedData.data.length).to.equal(115)
                expect(res.statusCode).to.equal(200)
                done()
            } catch(error) {
                done(error)
            }
        })
        routeHandler.getEvents(req, res)
    }) 

    it ('get the events by providing the negative page number', (done) => {
        const req = nodeMocksHttp.createRequest({query: {
            page: -2
        }})
        const res = nodeMocksHttp.createResponse({ eventEmitter: events.EventEmitter })
        res.on('end', () => {
            try {
                const paginatedData = res._getData()
                expect(Object.keys(paginatedData).length).to.equal(4)
                expect(paginatedData.page).to.equal(-2)
                expect(paginatedData.total).to.equal(115)
                expect(paginatedData.totalPages).to.equal(12)
                expect(paginatedData.data.length).to.equal(0)
                expect(res.statusCode).to.equal(200)
                done()
            } catch(error) {
                done(error)
            }
        })
        routeHandler.getEvents(req, res)
    }) 
})