var express 		= require('express');
var app				= express();
var mongoose		= require('mongoose');
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

require('.app/routes')(app);

app.listen(port);
console.log('Listening on port ' + port);
module.exports = app;