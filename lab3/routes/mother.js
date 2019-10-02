'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mother', { name : 'Mom is mom' , comment : 'She is very friendly' });
});

module.exports = router;
