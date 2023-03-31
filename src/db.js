require('dotenv').config({path: 'var.env'});
const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const testConnection = async () => {
    await connection.authenticate();
    await connection.sync();
};
try {
    testConnection();
    console.log('Conectado ao banco de dados com sucesso.');
} catch (error) {
    console.log('Não foi possivel estabelecer uma conexão com o banco de dados.');    
}

module.exports = connection;