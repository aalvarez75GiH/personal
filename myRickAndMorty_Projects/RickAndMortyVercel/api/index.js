const express = require('express') 
const cors = require('cors') 
const bodyParser = require('body-parser') 
const logger = require('morgan') 
const charactersRouter = require('./routes/characters')

const app = express() 
app.use(logger('dev')) 
app.use(cors()) 
app.use(bodyParser.json())
app.use('/api/characters', charactersRouter)


module.exports = app

