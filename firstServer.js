// { app_vers: 'V2',
//   company_uuid: 'fdbcbca5-ab2a-4fc8-b2fa-144925a6265d',
//   company_name: 'COYO GmbH',
//   users_reserved: '2',
//   users_invited: '2',
//   invitation_rate: '1.0',
//   users_activated: '2',
//   activation_rate: '1.0',
//   users_engaged_30d: '0',
//   engagement_rate: '0.0',
//	 healthScore: '0'
// }

var appRequest = require('./appRequest.js'),
	csv = require('csv'),
	nodemailer = require('nodemailer'),

	stringifier = csv.stringify(),

	HealthScoreResponse = [],
	CSR_ARR = [],
	CompanyArr = [],

	runToken = '',
	reportToken = 'c164fae95d9c',

	CSR_Obj = {
		Name: '',
		SlackUID: '',
		CompanyURL_ARR: []
	},
	CompanyObj = {
		CompanyName: '',
		CSR: '',
		SF_URL: '',
		HubspotUID: '', 
		HealthScore: 0
	},
	reportResponse = '',
	hubSpotAPIKEY = '\?hapikey\=7fff1530-02bd-4884-a4db-c1bdc7562b9b',
	hubOffset = '',
	hubObject = {},
	callHubSpot = true,
	hubCompanies = [];
// 	&properties=name&properties=hubspot_owner_id&properties=salesforceaccountid&properties=customer_health_score
// '/properties/v1/companies/properties' 
// https://api.hubapi.com/contacts/v1/lists/all/contacts/all\?hapikey\=demo	
// 7fff1530-02bd-4884-a4db-c1bdc7562b9b	



// Get Latest Report
appRequest.get('https://modeanalytics.com', '/api/perdoo/reports/'+reportToken+'/runs', function(getResponse){
	
	resObj = JSON.parse(getResponse);
	runToken = resObj._embedded.report_runs[0].token;
	console.log(runToken);
	// Get Report Data
	// /api/perdoo/reports/c164fae95d9c/runs/602d704493c8/results/content.csv
	// /api/perdoo/reports/c164fae95d9c/schedules/fcae598916d6
	// /api/perdoo/reports/'+reportToken+'/runs/'+runToken+'/results/content.csv
	// appRequest.get('https://modeanalytics.com', '/api/perdoo/reports/c164fae95d9c/runs/d482b0e7ec8d/results/content.csv', function(reportResponse){
		
	// 	console.log(reportResponse);
// https://perdoo.lightning.force.com/one/one.app#/sObject/0012000001ghERtAAM/view?a:t=[salesforceaccountid]

// name: 'hubspot_owner_id',
 //    label: 'HubSpot Owner',
 //    description: 'The owner of the company',
 //    groupName: 'companyinformation',
 //    type: 'enumeration',

 // name: 'salesforceaccountid',
 //    label: 'Salesforce Account ID',
 //    description: '',
 //    groupName: 'salesforceinformation',
 //    type: 'string',

 // name: 'name',
 //    label: 'Name',
 //    description: 'The name of the company or organization',
 //    groupName: 'companyinformation',
 //    type: 'string',
 //    fieldType: 'text',

 // name: 'customer_health_score',
 //    label: 'Health Score',
 //    description: 'Measurement of the customer\'s health, score updated every Thursday',
 //    groupName: 'success_data',
 //    type: 'number',
 //    fieldType: 'number',

		// transformCSV(getResponse, function(response){
		// 	HealthScoreResponse = response;

		// 	// Calculate New HealthScore (engagementRate = 70% && activationRate = 30%)
		// 	var LowScoreString = '<b>Low Healthscores</b>';

		// 	for(Company in HealthScoreResponse){

		// 		HealthScoreResponse[Company].healthScore = (HealthScoreResponse[Company].engagement_rate*.7)+(HealthScoreResponse[Company].activation_rate*.3);
				
		// 		if(HealthScoreResponse[Company].healthScore < .6 && HealthScoreResponse[Company].company_name !== '' && HealthScoreResponse[Company].company_name !== null){
			
		// 			LowScoreString+='<p>'+HealthScoreResponse[Company].company_name+': '+HealthScoreResponse[Company].healthScore+'</p>';
					
		// 		}

		// 	}
		// 	console.log(LowScoreString);
			
			// var transporter = nodemailer.createTransport({
			//     service: 'gmail',
			//     auth: {
			//         type: 'OAuth2',
			//         user: 'raul@perdoo.com',
			//         serviceClient: gmailCreds.client_id,
			//         privateKey: gmailCreds.private_key,
			//     }
			// });
			// transporter.set('oauth2_provision_cb', function(user, renew, callback){
			//     var accessToken = userTokens[user];
			//     if(!accessToken){
			//         return callback(new Error('Unknown user'));
			//     }else{
			//         return callback(null, accessToken);
			//     }
			// });

			// // setup email data with unicode symbols
			// var mailOptions = {
			//     from: 'raul@perdoo.com', // sender address
			//     to: 'raul@perdoo.com', // list of receivers - separate by 'comma|space'
			//     subject: 'Low Health Scores', // Subject line
			//     html: LowScoreString // html body
			// };
			// console.log(mailOptions.html);

			// // send mail with defined transport object
			// transporter.sendMail(mailOptions, (error, info) => {
			//     if (error) {
			//         return console.log(error);
			//     }
			//     console.log('Message %s sent: %s', info.messageId, info.response);
			// });
		// })
	// });
});

// Get Company Info
	// Get SF info
	// Get HubSpot info

// for(Company in CompanyArr){
	
// 	for(NewHealthScore in HealthScoreARR){
		
// 		if(Company.CompanyName === HealthScore.CompanyName){
// 			Company.HealthScore = NewHealthScore.HealthScore;
			
// 			if(Company.HealthScore < 40){
				
// 				for(CSR in CSR_ARR){
// 					if(CSR.Name === Company.CSR){
// 						CSR.CompanyURL_ARR.push(Company.SF_URL);
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// Get CSR Info
	// Get Slack CSR info

// Update Healthscores on Hubspot

// Send Slack Notifications

// for(CSR in CSR_ARR){
// 	// To: CSR.SlackUID
// 	var MessageString = "Hello "+CSR.name+", \n The following companies have low Health Scores! \n"
// 	for(Company in CSR.CompanyURL_ARR){
// 		MessageString += Company;
// 	}
// 	// Send MessageString to Slack
// }
function transformCSV(csvResponse, responseArr){

	var resArray = [];

	csv.parse(csvResponse, function(err, data){

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
	});
}