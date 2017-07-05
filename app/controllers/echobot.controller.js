var controller = require('./index.controller.js');

// create LINE SDK client
const client = controller.client;

exports.echoBot = function(req, res){
	Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
}

function handleEvent(event) {
	if (event.type !== 'message' || event.message.type !== 'text') {
		// ignore non-text-message event
		return Promise.resolve(null);
	}

	// create a echoing text message
	const echo = {
		type: 'text', text: event.message.text
	};

	// use reply API
	return client.replyMessage(event.replyToken, echo);
}