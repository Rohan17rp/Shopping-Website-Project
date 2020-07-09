const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, '../public')))
app.use('/api', require('./api').route)

require('./db/seed')

const SERVER_PORT = process.env.PORT || 4444

app.listen(SERVER_PORT, console.log('Server started on localhost:' + SERVER_PORT))