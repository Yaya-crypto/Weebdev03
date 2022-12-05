const pgtools = require('pgtools')
require('dotenv').config()

const DBname = process.env.DB_NAME
const DBuser = process.env.DB_USER;
const DBpwd = process.env.DB_PWD

const config = {
    user: DBuser,
    host: 'localhost',
    port: 5432,
    password: DBpwd
}

const createDB = async () => {
    try {
        await pgtools.createdb(config, DBname);
        console.log(`Created database: ${DBname}`)
    } catch (err) {
        if (err.name === 'duplicate_database') {
            console.log(`Datebase ${DBname} already exists!`);
            return;
        } else {
            console.error('createDB error:', err);
            process.exit(1);
        }
    }
}

module.exports = createDB;