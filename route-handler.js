const eventsData = require('./SampleData/events.json')
let dataHandler = require('./data-handler')
const e = require('express')

let getEvents = (req, res) => {
    let page = parseInt(req.query.page)
    let events = {}
    if (!page || page === 0) {
        events.page = 0
        events.total = 115
        events.totalPages = 12
        events.data = dataHandler.generateEventsData(115)
    } else if (page >= 1 && page <=12) {
        events.page = page
        events.total = 115
        events.totalPages = 12
        if (page >= 1 && page <= 11) {
            events.data = dataHandler.generateEventsData(10)
        } else {
            events.data = dataHandler.generateEventsData(5)
        }
    } else {
        events.page = page
        events.total = 115
        events.totalPages = 12  
        events.data = []
    }
    res.send(events)
}

module.exports = {
    getEvents: getEvents 
}