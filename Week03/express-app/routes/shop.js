const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    console.log("In the another middleware - express")
    res.send('<h1>This is my first application</h1>')
})

module.exports=router;