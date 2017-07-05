var express  = require('./config/express');

var app = express();

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port : ' + app.get('port'));
});