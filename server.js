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
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/exercises', require('./routes/api/exercises'));
// app.use('/api/courses', require('./routes/api/courses'));
// app.use('/api/subscriptions', require('./routes/api/subscriptions'));





//getting the port from env variable
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log('Server running on port '+ PORT));