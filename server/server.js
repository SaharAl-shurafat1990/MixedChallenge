//require express here
var express = require('express');
var mongoose = require('mongoose');
var app = express();
//require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//=============================================================================
/*									Database								 */
//=============================================================================


	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected
	var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/DonationDB';
	mongoose.connect(mongoURI);
	db = mongoose.connection;
	db.once('open',function () {
		console.log('mongoDB is open');
	});


//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.listen(process.env.PORT || 3000,function(){
	console.log('I am listening on port 3000');
	});




module.exports= app;