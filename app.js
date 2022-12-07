const createDB = require('./database/utils/DBCreate'); // Createe DB if not exisitng
const seedDB = require('./database/utils/DBSeed') // Dummmy valuees,mm for t4eesting

const db = require('./database'); // DB connection file

/*
Attempts to sync the database.
Sync localhost to DB here
*/

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

const express = require('express') // Import express backend library
const app = express();
const apiRouter = require('./routes') // TODO
const cors = require('cors') // Allows websitess to reecieve info from diff URLS.

/*
Anythin with usee iss middleare
Basically allowing you to use the feature
*/
const configureApp = async () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get('/favicon.ico', (req, res) => res.status(204));

    app.get('/hello', (request, response) => {
        response.send('hello world!');
    });

    // Main control 
    app.use('/api', apiRouter);

    /*
    Any error gets processed
    */
    app.use((err, req, res, next) => {
        console.error(err);
        console.log(req.originalUrl);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
}

const bootApp = async () => {
    await createDB();
    await syncDatabase();
    await configureApp();
};

bootApp();

const PORT = 5001;
app.listen(PORT, console.log(`Server started on ${PORT}`));