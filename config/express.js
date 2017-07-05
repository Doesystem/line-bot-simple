var configuration = require('./configuration.js');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	// parse application/json 
	app.use(bodyParser.json());

	// set port
	app.set('port', process.env.PORT || 3002);
	
	require('../app/routes/index.routes.js')(app);

	return app;
}