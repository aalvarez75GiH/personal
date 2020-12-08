const express = require('express') 
const cors = require('cors') 
const bodyParser = require('body-parser') 
const logger = require('morgan') 
const port = process.env.PORT || 3001 
const app = express() 
const charactersRouter = require('./routes/characters') 

app.use(logger('dev')) 
app.use(cors()) 
app.use(bodyParser.json())
app.use('/characters', charactersRouter); 



app.listen(port, function() { 
  console.log('Runnning on ' + port);
});

module.exports = app; 

