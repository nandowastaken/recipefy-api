const Sequelize = require('sequelize');
const database = require('../db');
const Unidade = require('./unidade');

const Ingrediente = database.define('Ingrediente', {
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
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kcal: 
    {
        type: Sequelize.FLOAT,
    },
    carboidratos:
    {
        type: Sequelize.FLOAT
    },
    lipidios:
    {
        type: Sequelize.FLOAT
    }

});

Ingrediente.belongsTo(Unidade);
Unidade.hasMany(Ingrediente);

module.exports = Ingrediente;