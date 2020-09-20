const eventsData = require('./SampleData/events.json')

let getEvents = (req, res) => {
    let page = parseInt(req.params.page)
    if (!page || page === 0) {
        res.send(eventsData)
    } else {
        res.send(eventsData)
    }
}

module.exports = {
    getEvents: getEvents 
}