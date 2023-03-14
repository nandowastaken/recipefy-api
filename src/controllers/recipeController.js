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
    
        if (body.nome && body.instrucoes && body.porcoes) {
            Recipes.create({
                nome: body.nome,
                descricao: body.descricao,
                instrucoes: body.instrucoes,
                porcoes: body.porcoes,
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
            if (Number(result)) {
                res.send(req.body)
            } else {
                let count = 0
                Recipes.findOne( {
                    where: {
                        id: req.params.id 
                    }
                })
                .then(data => {
                    if (data != null) {
                        for (let i in req.body) {
                            for (let j in data.dataValues) {
                                if(data.dataValues[i] == req.body[i]){
                                    count++
                                    break
                                }
                            }
                        }
                        if (Object.keys(req.body).length == count && count > 0) {
                            res.status(400).send('Nada pra alterar aqui.')
                        } else {
                            res.status(400).send('Alvo não encontrado.')
                        }
                    } else {
                        res.status(400).send('Recipes inválida.')
                    }
                    
                })
                .catch(error => {
                    res.status(400).send({
                        message: error.message || "Algo deu errado."
                    })
                })
            }
        }).catch(error => {
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
                res.send('Receita removido com sucesso.')
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