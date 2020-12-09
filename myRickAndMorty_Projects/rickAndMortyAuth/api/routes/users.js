const express = require('express')
const users = require('../models/users')
const router = express.Router()

router.get('/',(req,res) => {
    users.find()
    .exec()
    .then(x => res.status(200).send(x))
    // res.send('User EndPoint done...')

})

router.post('/',(req,res) => {
    users.create(req.body)
    .then(x => res.status(201).send(x))
    
})

module.exports = router