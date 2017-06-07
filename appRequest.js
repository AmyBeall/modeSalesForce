var request = require('request'),
	_ = require('underscore'),
	modeCreds = require('./modeCreds');

var modeUser = "Basic " + new Buffer(modeCreds.uid + ":" + modeCreds.pwd).toString("base64");

	// Set the headers
var defaultHeaders = {
	    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
	},
	modeHeaders = {
		'Content-Type' : 'application/json',
		'Accept' : 'application/hal+json',
		'Authorization' : modeUser
	};

var appRequest = {

		post : function(baseUrl, endpoint, postData, postResponse){
				// Configure the request
				if(baseUrl === 'https://modeanalytics.com'){
					var postHeaders = _.extend(defaultHeaders, modeHeaders);
				} else {
					var	postHeaders = defaultHeaders;
				}	

				var options = {
				    url: baseUrl+endpoint,
				    method: 'POST',
				    headers: JSON.stringify(postHeaders),
				    body: JSON.stringify(postData)
				};
				console.log(baseUrl);
				console.log(options);
				// Start the request
				request(options, function (error, response, body) {
				    if (!error && response.statusCode == 200) {
				        // Print out the response body
				   		postResponse(body);
				    }else if(error){
				    	console.log(error)
				    } else {	
				    	console.log(response);
					}
				});
			},
		get : function(baseUrl, endpoint, getResponse){

				if(baseUrl === 'https://modeanalytics.com'){
					
					var getHeaders = _.extend(defaultHeaders, modeHeaders);
				} else {
					
					var	getHeaders = defaultHeaders;
				}	
				
				// Configure the request
				var options = {
					    url: baseUrl+endpoint,
					    method: 'GET',
					    headers: getHeaders
					};	
				// Start the request
				request(options, function (error, response, body) {
				    if (!error && response.statusCode == 200) {
				        // Print out the response body
				   		getResponse(body);
				    } else if(error){
				    	console.log(error)
				    } else {	
				    	console.log(body);
					}
				});	
			}
	};

module.exports = appRequest;