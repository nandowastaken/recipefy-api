const Ingrediente = require('../models/ingrediente');

module.exports = {
    buscarTodos: async (req, res) => {
        Ingrediente.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    buscarIngrediente: async (req, res) => {
        Ingrediente.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || 'Algo deu errado'
            });
        });
    },

    inserirIngrediente: async (req, res) => {
        const body = req.body;

        if (body.nome) {
            Ingrediente.create({
                nome: body.nome,
                kcal: body.kcal,
                carboidratos: body.carboidratos,
                lipidios: body.lipidios
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

    editarIngrediente: async (req, res) => {
        Ingrediente.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send(req.body);
            } else {
                let count = 0;
                Ingrediente.findOne( {
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
                        res.status(400).send('Ingrediente inválido.');
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

    deletarIngrediente: async (req, res) => {
        Ingrediente.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send('Ingrediente removido com sucesso.');
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Ingrediente não encontrado.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    }
};