const express = require("express");
const app = express();
const botRouter = express.Router();
const fs = require('fs');

const variables = require("./variables");

// var debugCrawler = true;
var debugCrawler = false;

var userAgents = [
	'facebookexternalhit/1.1',
	'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
	'Facebot',
	'Twitterbot',
	'Pinterest'
]

var meta = JSON.parse(fs.readFileSync('data.json', 'utf8'));


var parseUrl = function (url) {

	var urlArray = url.split("/");

	console.log("initial array", urlArray);

	if (urlArray.length > 1 && urlArray[1] !== "") {
		return meta[urlArray[urlArray.length-1]];
	}
	else {
		return meta["home"];
	}

}

var getType = function (url) {

	var urlArray = url.split("/");

	console.log("url array", urlArray);

	if (urlArray[1] == "") {
		return "website"
	}

	return "article";
}

var getMetaData = function (req) {

	var data = parseUrl(req.url);

	console.log("data", data); 

	if (data) {

		return { 
			appID:(process.env.NODE_ENV == "production" ? variables.FBappID.prod : variables.FBappID.dev),
			url:(process.env.NODE_ENV == "production" ? variables.url.prod : variables.url.dev) + req.url,
			site_name:variables.site_name,
			title:data.title, 
			type:getType(req.url),
			description:data.description,
			img: data.image,
			height:data.size.height,
			width:data.size.width
		}
	}
	else {

		return null;
	}
}

var isBot = function (ua) {


	var $bot = userAgents.find(function (p) {

		return p == ua;
	})

	console.log("this is the bot", $bot);

	return $bot ? true : false;

}

var resolve = function (url) {

	var urlArray = url.split("/");

	var result = urlArray.find(function (p) {

		return p == "img";
	});

	
	return result ? false : true;

}

var botRoute = function(req, res, next) {

	var meta = getMetaData(req);

	if (meta) {

		res.render('./views/bot', meta);
	}
}


var botMiddleware = function(req,res,next) {
	var ua = req.headers['user-agent'];

	console.log("user-agent", ua);

	if (debugCrawler) { 
		botRoute(req,res,next)
	}
	else if (isBot(ua) && resolve(req.url)) {

		console.log(ua, 'is a bot');
		botRoute(req,res,next);
	}
	else {
		next();
	}
	

}


module.exports = {
	middleware:botMiddleware
}