var request = require('request'),
	config = require('./config'),
	creds = new Buffer(config.uid + ":" + config.pwd),
	modeUser = "Basic "+creds.toString("base64"),
	options = {
		headers : {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
			Authorization : modeUser
		},
		encoding: null,
		baseUrl : 'https://modeanalytics.com'
	};

module.exports = function(endpoint, callback){

	options.method = endpoint.method;
	options.uri = endpoint.uri;

	request(options, function(err, response, body){
		callback(err, response, body);
		 
	});
}