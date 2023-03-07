const Users = require('../models/users')
const database = require('../db')

exports.inserirUser = async (req, res) => {
    await database.sync()
    const body = req.body

    if (body.name && body.password && body.email) {
        Users.create({
            name: body.name,
            password: body.password,
            email: body.email,
            photo: body.photo,
            weight: body.weight,
            height: body.height

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