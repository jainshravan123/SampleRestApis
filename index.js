let express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sample Apis.'
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

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})