const Users = require('../models/users')
const database = require('../db')
const bcrypt = require('bcrypt')

exports.create = async (req, res) => {
    await database.sync()
    const body = req.body

    if (body.username && body.password && body.firstname && body.lastname && body.email) {
        Users.create({
            username: body.username,
            password: bcrypt.hash(body.password),
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email
        })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            })
        })
    } else {
        res.status(400).send({
            message: 'Todos os campos precisam estar preenchidos.'
        })
    }

    
}

exports.findAll = async (req, res) => {
    await database.sync()  

    Users.findAll({ 
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || 'Algo deu errado'
        })
    })
}