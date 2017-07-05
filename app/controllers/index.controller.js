// var models = require('../models/index.models.js');
var apoc = require('apoc');
var https = require("https");

exports.index = function(req, res){
	res.send("<h1>Hello Bot Keep Co., Ltd</h1>");
}

exports.echoBot = function(req, res){
	Promise.all(req.body.events.map(handleEventEchoBot)).then((result) => res.json(result));
}

function handleEventEchoBot(event) {
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

exports.helloBotKeep = function(req, res){
	res.send('helloBotKeep');
}