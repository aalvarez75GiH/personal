const express = require('express') //we call express
const cors = require('cors') //we call cors
const bodyParser = require('body-parser') //we call body-parser
const logger = require('morgan') //we call Morgan logger
const port = process.env.PORT || 3001 //we define web server listening port
const app = express() //this is our express app
const charactersRouter = require('./routes/characters') //we call characters route

app.use(logger('dev')) //we use morgan
app.use(cors()) //we use cors
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })) 
//we use body parser
app.use(bodyParser.json())
app.use('/characters', charactersRouter); //we use route we defined



app.listen(port, function() { //we set our app to listen by port we defined
  console.log('Runnning on ' + port);
});

module.exports = app; //we export our app like a module

