'use strict';
var express = require('express');

// var router = require('./api');
var app = express();

app.get('/', function (req, res) {
	res.send('Bottlecaps!');
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
})