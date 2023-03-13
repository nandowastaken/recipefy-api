require('dotenv').config({path: 'var.env'})
const express = require('express')

const userRoute = require('./routes/userRoute')
const ingredienteRoute = require('./routes/ingredienteRoute')

const server = express()
server.use(express.urlencoded({extended: false}))
server.use(userRoute)
server.use(ingredienteRoute)

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})