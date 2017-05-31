//implement model here
var mongoose = require('mongoose');

var donationSchema = new mongoose.Schema({
	firstName:String,
    lastName:String
});

var Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation; 
