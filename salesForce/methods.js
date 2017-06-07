var connect = require('./connect.js'),
	endpoint = {};

module.exports = {
	// returns the latest report token
	getServices : function(callback){
		endpoint.uri = '/services/data/v26.0/';

		connect.get(endpoint, function(err, res, body){
			if (!err && res.statusCode == 200) {
				console.log(body);
			}else if(err){
				
				if(err)console.log(err)
			} else {	
				
				if(res)console.log(res);
			}
		})
	}
}	