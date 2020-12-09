const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = mongoose.model('user', new Schema({
    name: String,
    email: String,
    password: String,
}))

module.exports = users

