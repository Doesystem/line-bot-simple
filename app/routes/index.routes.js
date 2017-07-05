module.exports = function(app){
	var index = require('../controllers/index.controller.js');
	var echobot = require('../controllers/echobot.controller.js');
	var horoscope = require('../controllers/horoscope.controller.js');

	app.get('/', index.index);
	app.all('/echoBot', echobot.echoBot);
	app.all('/horoscopeBot', horoscope.horoscope);
}