//require express here
var express = require('express');
var app = express();
//require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.listen(process.env.PORT || 3000,function(){
	console.log('I am listening on port 3000');
	});




module.exports= app;