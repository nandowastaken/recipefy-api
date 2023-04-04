const Sequelize = require('sequelize');
const database = require('../db');

const Dieta = database.define('Dieta', {
    id: 
    {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
    }
});

module.exports = Dieta;