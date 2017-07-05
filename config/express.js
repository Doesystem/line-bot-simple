var configuration = require('./configuration.js');
var express = require('express');
var bodyParser = require('body-parser');
var line = require('@line/bot-sdk');

module.exports = function(){
	var app = express();

	// parse application/json 
	app.use(bodyParser.json());

	// set port
	app.set('port', process.env.PORT);

	// create LINE SDK client
	var client = new line.Client(configuration.token);
	app.set('line', client);
	
	require('../app/routes/index.routes.js')(app);

	return app;
}