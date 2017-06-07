var connect = require('./connect.js'),
	zlib = require('zlib'),
	config = require('./config'),
	endpoint = {};

module.exports = {
	// returns the latest report token
	getLastReportRun : function(callback){
		endpoint.method = 'GET';
		endpoint.uri = '/api/perdoo/reports/'+config.reportToken;

		connect(endpoint, function(err, res, body){
			if (!err && res.statusCode == 200) {
				resObj = JSON.parse(body);
				callback(resObj.last_successful_run_token);
			}else if(err){
				
				if(err)console.log(err)
			} else {	
				
				if(res)console.log(res);
			}
		})
	},
	getReportCSV : function(lastToken, callback){
		// returns json string of CSV data
		endpoint.method = 'GET';
		endpoint.uri = '/api/perdoo/reports/'+config.reportToken+'/runs/'+lastToken+'/results/content.csv';

		connect(endpoint, function(err, res, body){
			if (!err && res.statusCode == 200) {

				zlib.gunzip(body, function(err, dezipped) {
					 
			       	var json_string = dezipped.toString('utf-8');
			        callback(json_string);
				});
			}else if(err){
				
				if(err)console.log(err)
			} else {	
				
				if(res)console.log(res);
			}
		})
	}
}