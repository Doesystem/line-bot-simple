var controller = require('./index.controller.js');
var horoscopeModels = require('../models/horoscope.model.js');
// create LINE SDK client
const client = controller.client;

exports.horoscope = function(req, res){
	Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
}

function handleEvent(event) {
	if (event.type !== 'message' || event.message.type !== 'text') {
		// ignore non-text-message event
		return Promise.resolve(null);
	}

	var msg = event.message.text;
	console.log(msg);

	var echo = horoscopeModels.findHoroscope(msg);

	// use reply API
	return client.replyMessage(event.replyToken, echo);
}