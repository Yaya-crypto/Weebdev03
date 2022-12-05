const createDB = require('./database/utils/DBCreate');
const seedDB = require('./database/utils/DBSeed')

const db = require('./database');

const syncDatabase = async () => {
    try {
        await db.sync({force: true});
        console.log('----Synced to db----')
        await seedDB();
        console.log('----Successfully seeded db----')
    } catch (err) {
        console.error('syncDB error:', err);
    }
}

const express = require('express')
const app = express();
const apiRouter = require('./routes') // TODO
const cors = require('cors')

const configureApp = async () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get('/favicon.ico', (req, res) => res.status(204));

    app.get('/hello', (request, response) => {
        response.send('hello world!');
    })
}