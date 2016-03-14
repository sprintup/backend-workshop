'use strict';

var express = require('express');

var router = require('./api');

var app = express();

app.use('/', express.static('public')); // tells express to serve static files from the public folder

app.use('/api', router);

app.listen(3000, function () {
	console.log("The server is running on port 3000");
});