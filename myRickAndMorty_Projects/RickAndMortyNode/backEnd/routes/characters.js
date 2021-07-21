const url_api = 'https://rickandmortyapi.com/api/character/'
//const { json } = require('body-parser');
const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();

router.get('/', (req,res) =>{
    fetch(url_api)
    .then(x => x.json())
    .then(x => {
        // return res.status(400).send({
        //     message: 'This is an error!'
        //  })
        
        res.status(200).send(x)
    })
    
    
    
     
        
}) 


  module.exports = router;