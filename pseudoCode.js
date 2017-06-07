var CSR_ARR = [],
	CompanyArr = [],
	HealthScoreARR = [],

	CSR_Obj = {
		Name: "",
		SlackUID: "",
		CompanyURL_ARR: []
	}
	CompanyObj = {
		CompanyName: "",
		CSR: "",
		SF_URL: "",
		HubspotUID: "", 
		HealthScore: 0
	},
	HealthScoreObj = {
		CompanyName = "",
		HealthScore = 0
	};

// Run Report - HealthScore Data Dump



// Get Report
	


// Get Company Info
	// Get SF info
	// Get HubSpot info


// Get CSR Info
	// Get Slack CSR info


// Calculate New HealthScore



// Update HealthScore in CompanyARR

for(Company in CompanyArr){
	
	for(NewHealthScore in HealthScoreARR){
		
		if(Company.CompanyName === HealthScore.CompanyName){
			Company.HealthScore = NewHealthScore.HealthScore;
			
			if(Company.HealthScore < 40){
				
				for(CSR in CSR_ARR){
					if(CSR.Name === Company.CSR){
						CSR.CompanyURL_ARR.push(Company.SF_URL);
					}
				}
			}
		}
	}
}

// Update Healthscores on Hubspot

// Send Slack Notifications

for(CSR in CSR_ARR){
	// To: CSR.SlackUID
	var MessageString = "Hello "+CSR.name+", \n The following companies have low Health Scores! \n"
	for(Company in CSR.CompanyURL_ARR){
		MessageString += Company;
	}
	// Send MessageString to Slack
}