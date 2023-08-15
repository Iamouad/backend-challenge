const express = require('express');
const functions = require('./config/db');
const consume = require("./kafka/consumer")

//initialise the app variable
const app = express();


//Connect db
//connectDB();
//createTopic();
functions.createTopic()

// var placesList = []
// placesList = consume(placesList)
// for (var i = 0; i < placesList.length; i++) 
//     console.log("Consumed => ", placesList[i])

//Init middleware bodyparser
app.use(express.json({extended: false}))

//test endpoint
app.get('/', (req, res)=> res.send('Lets do that challenge'))

//Defining routes
app.use('/api/places', require('./routes/api/places'));


module.exports = app;