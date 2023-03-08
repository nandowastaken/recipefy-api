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
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: 
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    photo:
    {
        type: Sequelize.STRING
    },
    weight:
    {
        type: Sequelize.FLOAT
    },
    height:
    {
        type: Sequelize.FLOAT
    }


})

console.log(Users)

module.exports = Users