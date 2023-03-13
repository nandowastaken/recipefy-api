require('dotenv').config({path: 'var.env'})
const express = require('express')

const userRoute = require('./routes/userRoute')
const ingredienteRoute = require('./routes/ingredienteRoute')
const tagRoute = require('./routes/tagRoute')

const server = express()
server.use(express.urlencoded({extended: false}))
server.use(userRoute)
server.use(ingredienteRoute)
server.use(tagRoute)

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})