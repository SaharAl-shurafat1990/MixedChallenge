//require the model here
var stripe = require('stripe')("sk_test_r2IHx0ZqLtOJ2eeZeZlSSlvG");
var Charge=require('./chargeModel.js');

module.exports ={
	getAllCharges : function (req, res) {
		Charge.find().exec(function (err, allDonations) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allDonations);
			}
		});
	},
	addCharge:function(req, res) {
		var stripeToken = req.body.stripeToken;

		var amount = req.body.amount[0];
		console.log(amount);

		stripe.charges.create({
			card: stripeToken,
			currency: 'usd',
			amount: amount
		},
		function(err, charge) {
			if (err) {
				res.send(500, err);
			} else {

				Charge.create({
					id:charge.id,
					token:stripeToken,
					status:charge.status,
					donationamount:amount,
					balance_transaction:charge.balance_transaction
				},function(err,ok){
					if(err){
						res.json(err);
					}
					else{
						res.json("Thank you for your donation:)!!")

					}

				})


			}
		});

		

	}
}


