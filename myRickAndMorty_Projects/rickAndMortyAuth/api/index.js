const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const users =  require('./routes/users')
const char = require('./routes/char')
const auth = require('./routes/auth')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})

app.use('/api/users', users)
app.use('/api/char', char)
app.use('/api/auth', auth)


app.listen('3001', () => {
	console.log('testing my node backend...')

})


module.exports = app
