const sequelize = require('sequelize')
const database = require('../db')

const Tag = database.define('Tag', {
    tag:
    {
        type: sequelize.STRING,
        allowNull: false
    }
})

Tag.belongsTo(receitas_id)
receitas_id.hasMany(Tag)

module.exports = Tag