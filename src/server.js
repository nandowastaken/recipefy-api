require('dotenv').config({path: 'var.env'})
const express = require('express')

const userRoute = require('./routes/userRoute')
const ingredienteRoute = require('./routes/ingredienteRoute')
const tagRoute = require('./routes/tagRoute')
const dietaRoute = require('./routes/dietaRoute')
const intoleranciaRoute = require('./routes/intoleranciaRoute')
const unidadeRoute = require('./routes/unidadeRoute')
const recipeRoute =  require('./routes/recipeRoute')

const server = express()
server.use(express.urlencoded({extended: false}))
server.use(userRoute)
server.use(ingredienteRoute)
server.use(tagRoute)
server.use(dietaRoute)
server.use(intoleranciaRoute)
server.use(unidadeRoute)
server.use(recipeRoute)

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})