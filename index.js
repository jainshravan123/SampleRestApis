let express = require('express')
const app = express()
let PORT = process.env.PORT || 3000

let routeHandler = require('./route-handler')

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sample Apis!!! Changed...'
    })
})

app.get('/welcome', (req, res) => {
    res.json({
        message: 'Hello World!!!'
    })
})

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the world of REST APIs'
    })
})

app.get('/api/events', routeHandler.getEvents)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})