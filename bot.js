const express = require("express");
const app = express();
const botRouter = express.Router();
const fs = require('fs');

const variables = require("./variables");

var meta = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// var getDataFile = function () {

// 	fs.readFile('data.json', 'utf8', function (err, data) {
// 		if (err) throw err;
// 		obj = JSON.parse(data);
// 	});
// }

// getMetaData();

var parseUrl = function (url) {

	var urlArray = url.split("/");

	console.log(urlArray);

	return meta[urlArray[2]];

}

var getType = function (url) {

	var urlArray = req.url.split("/");

	if (url[1] == "blog") {
		return "article"
	}

	return "website";
	

}

var getMetaData = function (req) {

	var data = parseUrl(req.url);

	return { 
		appID:variables.FBappID,
		url:process.env.NODE_ENV == "production" ? variables.url.prod : variables.url.dev,
		title:data.title, 
		type:getType(req.url),
		description:data.description,
		img: (process.env.NODE_ENV == "production" ? variables.url.prod : variabsles.url.dev) + data.image,
		height:data.size.height,
		width:data.size.width
	}
}

var botRoute = function(req, res, next) {

	res.render('bot', getMetaData(req));
}


var botMiddleware = function(req,res,next) {
	var ua = req.headers['user-agent'];

	botRoute(req,res,next);

	// if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
	// 	console.log(ua,' is a bot');
	// 	botRoute(req,res,next);
	// }
	// else {
	// 	next();
	// }

}


module.exports = {

	router:function () {
		botRouter.get("/", botRoute);
	},
	middleware:botMiddleware
}