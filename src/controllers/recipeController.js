const { Sequelize } = require('sequelize')
const Recipes = require('../models/recipes') 

module.exports = {
    buscarTodos: async (req, res) => {
        Recipes.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            })
        })
    },

    buscarReceita: async (req, res) => {
        Recipes.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            })
        })
    },

    inserirReceita: async (req, res) => {
        const body = req.body
    
        if (body.nome && body.senha && body.email) {
            Recipes.create({
                nome: body.nome,
                descricao: body.descricao,
                instrucoes: body.instrucoes,
                porcoes: body.porcoes,
                usuario: body.usuario
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
    
    editarReceita: async (req, res) => {
        Recipes.update(req.body, {
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

    excluirReceita: async (req, res) => {
        Recipes.destroy({
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