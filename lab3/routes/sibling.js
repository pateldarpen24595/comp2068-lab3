'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling', { name: 'BRO' , comment: 'He is very irritating' });
});

module.exports = router;
