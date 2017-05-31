//implement model here
var mongoose = require('mongoose');

var chargeSchema = new mongoose.Schema({
	id:String,
	balance_transaction:String,
	token:String,
	status:String	
});

var Charge = mongoose.model('Charge', chargeSchema);

module.exports = Charge; 
