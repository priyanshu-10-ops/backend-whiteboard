const mongoose = require('mongoose');

const username = 'priyanshudevops10_db_user';
const password = 'ZAhR8p5mGOk5n0oC';

const connectionString = `mongodb+srv://${username}:${password}@cluster0.bcqxh9z.mongodb.net/`;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to the database');
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

module.exports = connectToDatabase;