'use strict';

var express = require('express');
var caps = require('../../mock/caps.json');

app.get('/', function (req, res) {
	res.send('Bottlecaps!');
});