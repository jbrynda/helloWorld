const express = require('express')
const config = require('config')
const app = express()
const port =  8080

console.log('Hello World app data is ' + config.app["my-data"])

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Hello World app listening on port ${port} !'))
