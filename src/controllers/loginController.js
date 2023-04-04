const bcrypt = require('bcrypt');
const Users = require('../models/users'); 

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
          bcrypt.compare(senha, data.dataValues.senha, (err, result) => {
            if (result) {
              res.send(data);
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
