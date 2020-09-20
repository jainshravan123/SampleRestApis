const eventsData = require('./SampleData/events.json')
let dataHandler = require('./data-handler')

let getEvents = (req, res) => {
    let page = parseInt(req.params.page)
    if (!page || page === 0) {
        res.send(dataHandler.generateEventsData(10))
    } else {
        res.send(dataHandler.generateEventsData(page))
    }
}

module.exports = {
    getEvents: getEvents 
}