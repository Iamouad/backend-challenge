const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');
const db = process.env.mongoURI;
const connectDB = async () => {
    try {
        console.log("db...."+ db)
        if(! db)
            db = config.get('mongoURI');
        await mongoose.connect(db, {useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
            });
        console.log("MongoDB connecting...");
    } catch (error) {
        console.log(error.message);
        //exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;