const Sequelize = require('sequelize')
const database = require('../db')

const Receitas = database.define('Receitas', {
    id: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
   descricao:
   {
        type: Sequelize.STRING,
        allowNull: true
   },
   instrucoes:
   {
        type: Sequelize.STRING,
        allowNull: false
   },
   porcoes:{
        type: Sequelize.STRING,
        allowNull: false
   },

})

//Receitas.belongsTo(user_id)
//user_id.hasMany(Receitas)

module.exports = Receitas