var csv = require('csv'),
	http = require('http'),
	modeAnalyticsMethods = require('./modeAnalytics/methods.js'),
	salesForceMethods = require('./salesForce/methods.js'),
	salesForceConfig = require('./salesForce/config.js'),
	HealthScoreResponse = [];


modeAnalyticsMethods.getLastReportRun(function(res){
	
	var lastRun = res;

	modeAnalyticsMethods.getReportCSV(res, function(res){
		

		transformCSV(res, function(response){
		 
			HealthScoreResponse = response;
		
		});
		
	});
	
});
salesForceMethods.getServices(function(res){
	console.log(res);
})



function transformCSV(csvResponse, responseArr){

	var resArray = [];

	csv.parse(csvResponse, function(err, data){

		if(err){ 
			console.log(err);
		} else {	
			var i,
				length = data.length;
				response = data;

			for(i = 1; i < length; i++){

				var resObject = {},
					j,
					objLength = response[0].length;

				for(j = 0; j < objLength; j++){
					resObject[response[0][j]] = response[i][j];
				}
			
				resArray.push(resObject);
			}
			responseArr(resArray);
		}	
	});
}