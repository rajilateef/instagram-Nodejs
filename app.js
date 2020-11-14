const express = require('express')
const app = express()
const Port = 4000
const {MONGOURL} = require('./keys')
const mongoose = require('mongoose')
require('./model/user')
app.use(express.json())
app.use(require('./route/auth'))
mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to database successfully')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting database', err)
})
app.listen(Port,()=>{
    console.log('Server running in the server')
})

