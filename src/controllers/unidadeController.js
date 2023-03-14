const Unidade = require('../models/unidade')

module.exports = {
    buscarTodos: async (req, res) => {
        Unidade.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            })
        })
    },

    buscarUnidade: async (req, res) => {
        Unidade.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || 'Algo deu errado'
            })
        })
    },

    inserirUnidade: async (req, res) => {
        const body = req.body

        if (body.nome) {
            Unidade.create({
                nome: body.nome,
                kcal: body.kcal,
                carboidratos: body.carboidratos,
                lipidios: body.lipidios
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
            res.status(400).send('Campo obrigatório não preenchido.')
        }
    },

    editarUnidade: async (req, res) => {
        Unidade.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send(req.body)
            } else {
                let count = 0
                Unidade.findOne( {
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
                        res.status(400).send('Unidade inválida.')
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

    deletarUnidade: async (req, res) => {
        Unidade.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send('Unidade removida com sucesso.')
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Unidade não encontrada.')
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            })
        })
    }
}