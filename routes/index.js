var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {
        prod: process.env.NODE_ENV == 'PROD'
    });
});

module.exports = router;