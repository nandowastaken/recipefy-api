const bcrypt = require('bcrypt');
const Users = require('../models/users'); 
const jwt = require("jsonwebtoken");
require('dotenv').config({path: 'var.env'});   
const TOKEN_KEY = process.env.TOKEN_KEY;      

const loginController = {
  login: async (req, res) => {
    const { email, senha } = req.body;
    if (email && senha) {
      Users.findOne({
        where: {
          email,
        },
      })
        .then( (data) => {
          bcrypt.compare(senha, data.dataValues.senha, (err, isValidPassword) => {
            if (isValidPassword) {
              const token = jwt.sign({ userId: data.dataValues.id }, TOKEN_KEY, {
                expiresIn: "2h",
              });

              res.status(200).json({token});  
            } else {
              res.status(400).send({
                  message: "Usuário ou senha inválidos.",
              }); 
            }
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "Algo deu errado.",
          });
        });
    } else {
      res.status(400).send({
        message: "Campos obrigatórios não preenchidos.",
      });
    }
  },
};

module.exports = loginController;
