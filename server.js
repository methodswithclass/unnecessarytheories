const express = require("express");
const app = express();
const bot = require("./bot");


const path = require("path");
const bodyParser = require("body-parser");


var refreshPages = [
"home"
// "blog"
]


const forceSSL = function() {
	return function (req, res, next) {
		console.log("force https");
		if (req.headers['x-forwarded-proto'] !== 'https') {
			return res.redirect(['https://', req.get('Host'), req.url].join(''));
		}
		next();
	}
}

var refresh = function () {

	return function (req, res, next) {

		console.log(req.url);

		var urlArray = req.url.split("/");

		for (var i in refreshPages) {
			if (urlArray[1] == refreshPages[i]) {
				return res.redirect(['http://', req.get('Host')].join(''));
			}
		}

		next();

	}
}


app.set('view engine', 'jade');


// app.use("/", bot.router);

app.use(bot.middleware);

app.use(refresh());
// if  (process.env.NODE_ENV == "production") app.use(forceSSL());
// else {console.log("environment development");}

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use("/dist/assets/css", express.static(path.join(__dirname, "dist/assets/css")));
app.use("/dist/assets/css/museo", express.static(path.join(__dirname, "dist/assets/css/museo")));
app.use("/dist/assets/js", express.static(path.join(__dirname, "dist/assets/js")));
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/blog/*", express.static(path.join(__dirname, "dist")));


var listener = app.listen(process.env.PORT || 8080, function () {

	console.log("listening on port", listener.address().port);
});