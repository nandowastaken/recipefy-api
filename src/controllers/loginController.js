const { Sequelize } = require('sequelize');
const Users = require('../models/users'); 

const loginController = {
  login: (req, res) => {
    const { email, senha } = req.body;
    if (email && senha) {
      Users.findOne({
        where: {
          email,
          senha,
        },
      })
        .then((data) => {
          if (data) {
            res.send('Done');
          } else {
            res.status(400).send({
              message: "Usuário ou senha inválidos.",
            });
          }
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
