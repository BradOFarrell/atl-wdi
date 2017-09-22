//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
//router.post()

router.get('/', function(req, res){
    res.send('This is a piratesadsdss!');  
});

router.get('/:id', function(req, res, next) {
    const pirateName = req.params.id;
    res.send('This pirate is named '+pirateName);
});

//exports
module.exports = router;
//your code below
