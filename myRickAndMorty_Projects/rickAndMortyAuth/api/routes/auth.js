const express = require('express')
const users = require('../models/users')
const crypto = require('crypto'); 
const jwt = require('jsonwebtoken');
const { isAuthenticated, hasRoles } = require('../auth')
const router = express.Router()


const signToken = (_id) =>{
    return jwt.sign({ _id }, 'mi-secreto',{
        expiresIn: 60 * 60 * 24 * 365,
    })
}


router.post('/login',(req,res) => {
    const { email, password } = req.body
    users.findOne ({ email })
    .exec()
    .then(user => {
        if (!user){ 
            return res.sendStatus(404)
        } 
          crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) =>{ 
            const encryptedPassword = key.toString('base64')
            if (user.password === encryptedPassword){
                const token = signToken(user._id)
                const type = user.userType
                return res.send({token, type})
            }
                    
        })

    })
})

router.get('/me', isAuthenticated, (req,res) => {
    const { _id, email, name} = req.user
    res.send({ _id, email, name})
})

module.exports = router

