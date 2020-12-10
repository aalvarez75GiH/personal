const express = require('express')
const users = require('../models/users')
const crypto = require('crypto')
const router = express.Router()

router.get('/',(req,res) => {
    users.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req,res) => {
    const { name, email, password } = req.body
    crypto.randomBytes(16, (err, salt) => { 
        const newSalt = salt.toString('base64')
        crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) =>{ 
            const encryptedPassword = key.toString('base64')
            users.findOne({ email })//5
            .exec()
            .then(user => {
                if (user){
                    return res.send('User already exist...')
                }
                users.create({ 
                    name,
                    email,
                    password: encryptedPassword,
                    salt: newSalt,
                }).then(() => {
                    res.send('User created successfully...')
                })
            })

        })
    })
  })

module.exports = router