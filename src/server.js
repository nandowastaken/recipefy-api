require('dotenv').config({path: 'var.env'});
const express = require('express');

const userRoute = require('./routes/userRoute');
const ingredienteRoute = require('./routes/ingredienteRoute');
const tagRoute = require('./routes/tagRoute');
const dietaRoute = require('./routes/dietaRoute');
const intoleranciaRoute = require('./routes/intoleranciaRoute');
const unidadeRoute = require('./routes/unidadeRoute');
const recipeRoute =  require('./routes/recipeRoute');
const loginRoute = require('./routes/loginRoute');
const cadastroRoute = require('./routes/cadastroRoute');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json({ extended: false }));
server.use(express.urlencoded({extended: false}));
server.use(userRoute);
server.use(ingredienteRoute);
server.use(tagRoute);
server.use(dietaRoute);
server.use(intoleranciaRoute);
server.use(unidadeRoute);
server.use(recipeRoute);
server.use(loginRoute);
server.use(cadastroRoute);


const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});