var request = require('request'),
	config = require('./config'),
	options = {
		headers : {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
		},
		baseUrl : 'https://perdoo.lightning.force.com/'
	};

module.exports = function(endpoint, callback){

	options.method = endpoint.method;
	options.uri = endpoint.uri;
	options.headers.Authorization = 'Bearer '+ config.token;

	if(config.token === ''){
		authorize(function(err, res, body){
			if(err) console.log(err);
			if(res) console.log(res);
			if(body) console.log(body);
		});

	} else {
		request(options, function(err, response, body){
			callback(err, response, body);
			 
		});
	}
}
function authorize(callback){

	request(options, function(err, response, body){
		callback(err, response, body);
		 
	});
}