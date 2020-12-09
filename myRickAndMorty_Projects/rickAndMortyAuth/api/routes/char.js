const url_api = 'https://rickandmortyapi.com/api/character'
const express = require('express')
const fetch = require("node-fetch")
const cors = require('cors')
const router = express.Router()

router.get('/', cors(), (req,res,next) => {
    fetch(url_api)
    .then(x => x.json())
    .then(x => {
        res.send(x)
    }) 
})

  module.exports = router;