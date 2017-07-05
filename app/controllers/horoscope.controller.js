var controller = require('./index.controller.js');

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

	var echoText = models.findHoroscope(msg);
	// create a echoing text message
	var echo = {
		type: 'text',
		text: echoText
	};

	// use reply API
	return client.replyMessage(event.replyToken, echo);
}