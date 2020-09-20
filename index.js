let express = require('express');
const app = express();
const PORT = 3000;

app.get('/welcome', (req, res) => {
    res.json({
        message: 'Hello World!!!'
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})