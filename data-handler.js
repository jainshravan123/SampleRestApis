let generateEventsData = (numberOfRecords) => {
    let data = []
    for (let i = 0; i < numberOfRecords; i++) {
        let event = {
            "name": "Marriage of Ram and Vidya",
            "organizer": "ABC pvt ltd",
            "date": "12 June 2019",
            "place": "Bangalore",
            "payment": {
                "status": "done",
                "type": "net banking"
            }
        }
        data.push(event)
    }
    return data
}

module.exports = {
    generateEventsData: generateEventsData
}