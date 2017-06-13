var donationController=require('.././donation/donationController.js');
var chargeController=require('.././charge/chargeController.js');
module.exports = function (app, express) {
	 
    app.get('/api/getAll',chargeController.getAllCharges);
    app.post('/api/user',donationController.addDonation);
	app.post('/api/charge',chargeController.addCharge );
    

};

