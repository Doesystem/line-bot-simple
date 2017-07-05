var configuration = require('../../config/configuration.js');
var models = require('../models/index.models.js');
var line = require('@line/bot-sdk');
var apoc = require('apoc');

// create LINE SDK client
exports.client = new line.Client(configuration.token);

exports.index = function(req, res){
	res.send("<h1>Hello Bot Keep Co., Ltd</h1>");
}