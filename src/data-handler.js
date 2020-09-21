var randomName = require('node-random-name')

const generateRandomPlace = () => {
  const cities = [
    'Bangalore',
    'Delhi',
    'Pune',
    'Bhopal',
    'Chennai',
    'London',
    'Kolkata',
    'Noida',
    'Chandigarh',
    'Jaipur',
    'Udaipur',
    'Lucknow',
    'Moradabad',
    'Bijnor',
    'Greater Noida',
    'Faridabad',
    'Gurgaon',
    'Trivandrum',
    'Alappuzha',
    'Mangalore',
    'Raipur',
    'Jhansi'
  ]
  return cities[Math.floor(Math.random() * cities.length)]
}

function generateRandomDate () {
  const start = new Date(1976, 0, 1)
  const end = new Date(2020, 2, 14)
  const timestamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  var date = timestamp.getDate()
  var month = timestamp.getMonth() + 1
  var year = timestamp.getFullYear()
  var completeDate = date + '/' + month + '/' + year
  return completeDate
}

const generateEventsData = (numberOfRecords) => {
  const data = []
  for (let i = 0; i < numberOfRecords; i++) {
    const maleNameOne = randomName({ random: Math.random, first: true, gender: 'male' })
    const maleNameTwo = randomName({ random: Math.random, first: true, gender: 'male' })
    const femaleNameOne = randomName({ random: Math.random, first: true, gender: 'female' })

    const event = {
      name: `Marriage of ${maleNameOne} and ${femaleNameOne}`,
      organizer: `${maleNameTwo} pvt ltd`,
      date: generateRandomDate(),
      place: generateRandomPlace(),
      payment: {
        status: 'done',
        type: 'Online Transfer'
      }
    }
    data.push(event)
  }
  return data
}

module.exports = {
  generateEventsData: generateEventsData
}
