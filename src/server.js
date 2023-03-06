require('dotenv').config({path: 'var.env'})
const express = require('express')

const userRoute = require('./routes/userRoute')

const server = express()
server.use(express.urlencoded({extended: false}))
server.use(userRoute)

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})