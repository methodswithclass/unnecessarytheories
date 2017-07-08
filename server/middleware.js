

var refreshPages = [
"home"
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

		// console.log(req.url);

		var urlArray = req.url.split("/");

		for (var i in refreshPages) {
			if (urlArray[1] == refreshPages[i]) {
				return res.redirect(['http://', req.get('Host')].join(''));
			}
		}

		next();

	}
}


var accessControl = function () {

	return function (req, res, next) {

		// Website you wish to allow to connect
    	// res.setHeader('Access-Control-Allow-Origin', ['http://unecessarytheories-dev.herokuapp.com', 'http://unecessarytheories.herokuapp.com', 'http://localhost:8080']);

    	return res.set("Access-Control-Allow-Origin", "*");

    	// next();
	}
}


module.exports = {
	ssl:forceSSL,
	refresh:refresh,
	accessControl:accessControl
}