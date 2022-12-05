const Sequelize = require('sequelize')
require('dotenv').config()

console.log('Opening database connection');

const DBname = process.env.DB_NAME
const DBuser = process.env.DB_USER;
const DBpwd = process.env.DB_PWD

const db = new Sequelize(DBname, DBuser, DBpwd, { // Actual connection to db.
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

module.exports = db; // exports db