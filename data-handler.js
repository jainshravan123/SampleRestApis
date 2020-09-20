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

let generateEventsData = (numberOfRecords) => {
    let data = []
    for (let i = 0; i < numberOfRecords; i++) {
        let maleNameOne = random_name({ first: true, gender: "male" })
        let maleNameTwo = random_name({ first: true, gender: "male" })
        let femaleNameOne = random_name({ first: true, gender: "female" })

        let event = {
            "name": `Marriage of ${maleNameOne} and ${femaleNameOne}`,
            "organizer": `${maleNameOne} pvt ltd`,
            "date": dateGenerator.getRandomDate(),
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