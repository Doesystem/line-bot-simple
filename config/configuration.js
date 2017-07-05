var env = process.env

// set port
env.PORT = 3002

// create LINE SDK config from env variables
exports.token = {
	channelAccessToken: "",
	channelSecret: ""
};

// env.NEO4J_PROTOCOL = 'http'
// env.NEO4J_HOST = '127.0.0.1'
// env.NEO4J_PORT = '7474'
// env.NEO4J_USERNAME = ''
// env.NEO4J_PASSWORD = ''