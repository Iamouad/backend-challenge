const express = require('express');
const connectDB = require('./config/db');

//initialise the app variable
const app = express();

//Connect db
connectDB();

//Init middleware bodyparser
app.use(express.json({extended: false}))

//test endpoint
app.get('/', (req, res)=> res.send('Lets do that challenge'))

//Defining routes
app.use('/api/places', require('./routes/api/places'));


module.exports = app;