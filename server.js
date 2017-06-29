const express = require("express");
const app = express();


var refreshPages = [
"construction"
]


// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
  	console.log("force https");
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
                          ['https://', req.get('Host'), req.url].join('')
                          );
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

app.use(refresh());
// if (process.env.NODE_ENV == "production") app.use(forceSSL());
// else {console.log("environment development")}

app.use(express.static(__dirname + "/dist"));


app.listen(process.env.PORT || 8080);
