const dataHandler = require('./../../src/data-handler')
const expect = require('chai').expect

describe('generateEventsData tests', () => {
    it ('generate two objects with random data', () => {
        let data = dataHandler.generateEventsData(2)
        expect(data.length).to.equal(2)
        expect(Object.keys(data[0]).length).to.equal(5)
    })

    it ('generate five objects with random data', () => {
        let data = dataHandler.generateEventsData(5)
        expect(data.length).to.equal(5)
        expect(Object.keys(data[0]).length).to.equal(5)
    })

    it ('calls generateEventsData with undefined number of records', () => {
        let data = dataHandler.generateEventsData()
        expect(data.length).to.equal(0)
    })

    it ('calls generateEventsData with zero', () => {
        let data = dataHandler.generateEventsData(0)
        expect(data.length).to.equal(0)
    })

    it ('calls generateEventsData with negative number of records', () => {
        let data = dataHandler.generateEventsData(-5)
        expect(data.length).to.equal(0)
    })
})