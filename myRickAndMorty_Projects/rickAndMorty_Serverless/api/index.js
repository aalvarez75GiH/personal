const express = require('express') 
const logger = require('morgan') 
const char = require('./routes/char')
const bodyParser = require('body-parser')
const cors = require('cors') 

const app = express() 
app.use(bodyParser.json());
app.use(cors()); 
app.use(logger('dev')) 

app.use('/api/char', char)


module.exports = app

