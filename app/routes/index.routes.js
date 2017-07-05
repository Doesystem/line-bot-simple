module.exports = function(app){
	var index = require('../controllers/index.controller.js');

	app.get('/', index.index);
	app.all('/echoBot', index.echoBot);
	app.all('/helloBotKeep', index.helloBotKeep);
}