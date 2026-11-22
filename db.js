require('dotenv').config();
const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

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

