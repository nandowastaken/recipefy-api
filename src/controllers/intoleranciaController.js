const Intolerancia = require('../models/intolerancia');

module.exports = {
    buscarTodos: async (req, res) => {
        Intolerancia.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    buscarIntolerancia: async (req, res) => {
        Intolerancia.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || 'Algo deu errado'
            });
        });
    },

    inserirIntolerancia: async (req, res) => {
        const body = req.body;

        if (body.nome) {
            Intolerancia.create({
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

    editarIntolerancia: async (req, res) => {
        Intolerancia.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send(req.body);
            } else {
                let count = 0;
                Intolerancia.findOne( {
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
                        res.status(400).send('Intolerancia inválida.');
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

    deletarIntolerancia: async (req, res) => {
        Intolerancia.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (Number(result)) {
                res.send('Intolerancia removida com sucesso.');
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Intolerancia não encontrada.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    }
};