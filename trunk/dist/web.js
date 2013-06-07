var express = require("express");

var favicon = '/components/user-interface-library/media/icons/favicon.ico';

var app = express();

var port = process.env.PORT || 5000;

app.use(express.logger());

// Send correct caching headers
app.use(function (req, res, next) {
	res.header("Cache-Control", "public, must-revalidate");
    next();
});

app.use(express.compress());
app.use(express.favicon(__dirname + '/app' + favicon));
app.use(express.static(__dirname + '/app'));

// Handle 404
app.use(function(req, res) {
	res.status(404);
	res.sendfile('app/404.html');
});

// Handle 500
app.use(function(error, req, res, next) {
	res.status(500);
	res.sendfile('app/404.html');
});

app.listen(port, function() {
	console.log('Listening on ' + port);
	console.log('Environment: ' + app.settings.env)
});