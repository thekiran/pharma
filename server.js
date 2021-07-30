const express = require('express')
const static = require('serve-static')
const path = require('path')

const app = express()

app.use('/',static(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)
console.log('listening')