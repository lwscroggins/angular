'use strict';

var express = require('express');
var http = require('http');
var app = express();



client.authenticate(function(error, client) {
	if(error) {
		return showError(error);
	}
});

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

var server = http.createServer(app);

app.set('port', process.env.PORT || 4120);

server.listen(app.get('port'), function() {
  console.log('server is listening on port: ', app.get('port'));
});