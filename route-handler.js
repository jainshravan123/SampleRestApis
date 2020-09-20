const eventsData = require('./SampleData/events.json')
let dataHandler = require('./data-handler')

let getEvents = (req, res) => {
    let page = parseInt(req.query.page)
    let events = {}
    if (!page || page === 0) {
        events.page = 0
        events.total = 115
        events.totalPages =  12  
        events.data = dataHandler.generateEventsData(10)
    } else if (page >= 1 && page <=12) {
        events.page = page
        events.total = 115
        events.totalPages =  12  
        events.data = dataHandler.generateEventsData(page)
    } else {
        events.page = page
        events.total = 115
        events.totalPages =  12  
        events.data = []
    }
    return events
}

module.exports = {
    getEvents: getEvents 
}