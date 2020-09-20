let express = require('express')
const app = express()
let PORT = process.env.PORT || 3000

let routeHandler = require('./route-handler')

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sample Apis!!! Changed...'
    })
})

app.get('/api/events', routeHandler.getEvents)

app.get('*', (req, res) => {
    res.send({
        status: 404,
        message: 'This route does not exit.'
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})