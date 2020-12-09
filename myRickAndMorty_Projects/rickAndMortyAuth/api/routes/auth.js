const express = require('express')
const users = require('../models/users')
const router = express.Router()

router.post('/login',(req,res) => {
    const { email, password } = req.body
    users.findOne ({ email })
    .exec()
    .then(user => {
        console.log(user)
        if (!user){ 
            // return res.send('Usuario y/o contraseña incorrecta')
            return res.sendStatus(404)
        } 
        if (password === '1234'){
            return res.sendStatus(200)
        }else {
            return res.sendStatus(404)
        }
    })
})



module.exports = router