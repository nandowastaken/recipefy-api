const { Sequelize } = require('sequelize');
const Tag = require('../models/tags');

module.exports = {
    buscarTodos: async (req, res) => {
        Tag.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    buscarTag: async (req, res) => {
        Tag.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || 'Algo deu errado'
            });
        });
    },

    inserirTag: async (req, res) => {
        const body = req.body;

        if (body.tag) {
            Tag.create({
                tag: body.tag
            })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Algo deu errado."
                });
            });
        } else {
            res.status(400).send('Campo obrigatório não preenchido.');
        }
    },

    editarTag: async (req, res) => {
        Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send(req.body);
            } else {
                let count = 0;
                Tag.findOne( {
                    where: {
                        id: req.params.id 
                    }
                })
                .then(data => {
                    if (data != null) {
                        for (let i in req.body) {
                            for (let j in data.dataValues) {
                                if(data.dataValues[i] == req.body[i]){
                                    count++;
                                    break;
                                }
                            }
                        }
                        if (Object.keys(req.body).length == count && count > 0) {
                            res.status(400).send('Nada pra alterar aqui.');
                        } else {
                            res.status(400).send('Alvo não encontrado.');
                        }
                    } else {
                        res.status(400).send('Tag inválida.');
                    }
                    
                })
                .catch(error => {
                    res.status(400).send({
                        message: error.message || "Algo deu errado."
                    });
                });
            }
        }).catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    },

    deletarTag: async (req, res) => {
        Tag.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send('Tag removida com sucesso.');
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Tag não encontrado.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    }
};