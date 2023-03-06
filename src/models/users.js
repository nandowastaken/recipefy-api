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
    username:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstname:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false
    }



})

module.exports = Users