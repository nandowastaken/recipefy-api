const Dieta = require('../models/dieta');

module.exports = {
    buscarTodos: async (req, res) => {
        Dieta.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    buscarDieta: async (req, res) => {
        Dieta.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || 'Algo deu errado'
            });
        });
    },

    inserirDieta: async (req, res) => {
        const body = req.body;

        if (body.nome) {
            Dieta.create({
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

    editarDieta: async (req, res) => {
        Dieta.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send(req.body);
            } else {
                let count = 0;
                Dieta.findOne( {
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
                        res.status(400).send('Dieta inválida.');
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

    deletarDieta: async (req, res) => {
        Dieta.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send('Dieta removida com sucesso.');
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Dieta não encontrada.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    }
};