const Sequelize = require('sequelize')
const database = require('../db')

const Users = database.define('users', {
    id: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    weight:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    height:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    }


})

module.exports = Users