const bcrypt = require('bcrypt');
const Users = require('../models/users');
const jwt = require("jsonwebtoken");
require('dotenv').config({path: 'var.env'});   
const TOKEN_KEY = process.env.TOKEN_KEY;     

module.exports = {
    buscarTodos: async (req, res) => {
        Users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    buscarUser: async (req, res) => {
        Users.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Algo deu errado.'
            });
        });
    },

    inserirUser: async (req, res) => {
        const body = req.body;
    
        if (body.nome && body.senha && body.email) {
            Users.create({
                nome: body.nome,
                senha: await bcrypt.hash(body.senha, 10),
                email: body.email,
                foto: body.foto,
                peso: body.peso,
                altura: body.altura
    
            })
            .then(data => {
                const token = jwt.sign({ userId: data.dataValues.id }, TOKEN_KEY, {
                    expiresIn: "2h",
                });

                res.status(200).json({token});
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Algo deu errado."
                });
            });
        } else {
            res.status(400).send({
                message: 'Campos obrigatórios não preenchidos.'
            });
        }
    },
    
    editarUser: async (req, res) => {
        Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            console.log(result);
            // falsy and truthy concepts : the *number* 1 is truthy and the *number* 0 is falsy
            // result can only be 0 or 1
            if (Number(result)) {
                res.send(req.body);
            } else {
                res.status(400).send('Campo inalterado ou inexistente.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
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
                res.send('Usuário removido com sucesso.');
            } else {
                res.status(400).send('Não foi possível realizar esta operação. Usuário inexistente.');
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Algo deu errado."
            });
        });
    }
};


