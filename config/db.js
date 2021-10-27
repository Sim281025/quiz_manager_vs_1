const mongoose = require('mongoose');
const config = require('config'); //access to global variable in default.js
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose
            .connect( db, {
                useNewUrlParser: true 
            });

        console.log('MongoDB connected')
    } catch (err) {
        console.error(err.meassage);
        process.exit(1); //exit with failure
    }
}

module.exports = connectDB;