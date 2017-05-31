var donationController=require('.././donation/donationController.js');
var stripe = require('stripe')("sk_test_r2IHx0ZqLtOJ2eeZeZlSSlvG");
module.exports = function (app, express) {

    app.get('/api/getAll',donationController.getAllDonations);
    app.post('/api/user',donationController.addDonation);
   
	app.post('/api/charge', function(req, res) {
    var stripeToken = req.body.stripeToken;
    console.log(stripeToken)
    var amount = 1000;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send(500, err);
        } else {
            res.send("Thank you");
            
        }
    });
});
    

};

