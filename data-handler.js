var random_name = require('node-random-name')
let dateGenerator = require('random-date-generator')

let generateRandomPlace = () => {
    let cities = [
        "Bangalore",
        "Delhi",
        "Pune",
        "Bhopal",
        "Chennai",
        "London",
        "Kolkata",
        "Noida",
        "Chandigarh",
        "Jaipur",
        "Udaipur",
        "Lucknow",
        "Moradabad",
        "Bijnor",
        "Greater Noida",
        "Faridabad",
        "Gurgaon",
        "Trivandrum",
        "Alappuzha",
        "Mangalore",
        "Raipur",
        "Jhansi"
    ]
    return cities[Math.floor(Math.random() * cities.length)]
}

function generateRandomDate() {
    let start = new Date(1976, 0, 1)
    let end = new Date(2020, 2, 14)
    /*
    var date = new Date(start + Math.random() * (end - start));
    return date;
    */
    let timestamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    var date = timestamp.getDate()
    var month = timestamp.getMonth()+1
    var year = timestamp.getFullYear()
    var completeDate = month+'/'+date+'/'+year
    return completeDate
}

let generateEventsData = (numberOfRecords) => {
    let data = []
    for (let i = 0; i < numberOfRecords; i++) {
        let maleNameOne = random_name({ random: Math.random, first: true, gender: "male" })
        let maleNameTwo = random_name({ random: Math.random, first: true, gender: "male" })
        let femaleNameOne = random_name({ random: Math.random, first: true, gender: "female" })

        let event = {
            "name": `Marriage of ${maleNameOne} and ${femaleNameOne}`,
            "organizer": `${maleNameTwo} pvt ltd`,
            "date": generateRandomDate(),
            "place": generateRandomPlace(),
            "payment": {
                "status": "done",
                "type": "Online Transfer"
            }
        }
        data.push(event)
    }
    return data
}

module.exports = {
    generateEventsData: generateEventsData
}