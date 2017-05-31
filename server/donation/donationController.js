//require the model here
var stripe = require('stripe')("sk_test_r2IHx0ZqLtOJ2eeZeZlSSlvG");
var Donation=require('./donationModel.js');

module.exports ={
	getAllDonations : function (req, res) {
		Donation.find().exec(function (err, allDonations) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(allDonations);
      }
    });
	
	},
	addDonation:function(req, res){
		var firstName=req.body.firstName;
		var lastName=req.body.lastName;

		Donation.create({
		firstName:firstName,
		lastName:lastName
		},function(err,ok){
			if(err){
				res.json(err);
			}
			else{
				res.json("add Donation!!")
				
			}

		})

	}
	
	}
