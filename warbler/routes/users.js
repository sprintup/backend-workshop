console.log('routes/users.js');

var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Warble' });
});

module.exports = router;


//alternative place to put routes, we can put all routes in index file. Or we can have the routes in 2 places