const { Sequelize } = require('sequelize')
const Users = require('../models/users')

module.exports = {
    buscarTodos: async (req, res) => {
        Users.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            })
        })
    },

    buscarUser: async (req, res) => {
        Users.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            })
        })
    },

    inserirUser: async (req, res) => {
        const body = req.body
    
        if (body.nome && body.senha && body.email) {
            Users.create({
                nome: body.nome,
                senha: body.senha,
                email: body.email,
                foto: body.foto,
                peso: body.peso,
                altura: body.altura
    
            })
            .then(data => {
                res.send(data)
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
    },
    
    editarUser: async (req, res) => {
        Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            // falsy and truthy concepts : the *number* 1 is truthy and the *number* 0 is falsy
            // result can only be 0 or 1
            if (Number(result)) {
                res.send(req.body)
            } else {
                res.status(400).send('Campo inalterado ou inexistente.')
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            })
        })
    },

    excluirUser: async (req, res) => {
        Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            // falsy and truthy concepts : the *number* 1 is truthy and the *number* 0 is falsy
            // result can only be 0 or 1
            if (Number(result)) {
                res.send('Usuário removido com sucesso.')
            } else {
                res.status(400).send('Não foi possível realizar esta operação')
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            })
        })
    }
}


