const express = require("express");
const app = express();
const botRouter = express.Router();
const fs = require('fs');

const variables = require("./variables");

// var debugCrawler = true;
var debugCrawler = false;

var meta = JSON.parse(fs.readFileSync('data.json', 'utf8'));


var parseUrl = function (url) {

	var urlArray = url.split("/");

	console.log("initial array", urlArray);

	if (urlArray.length > 1 && urlArray[1] !== "") {
		return meta[urlArray[2]];
	}
	else {
		return meta["home"];
	}

}

var getType = function (url) {

	var urlArray = url.split("/");

	console.log("url array", urlArray);

	if (urlArray[1] == "blog") {
		return "article"
	}

	return "website";
}

var getMetaData = function (req) {

	var data = parseUrl(req.url);

	console.log("data", data); 

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

var botRoute = function(req, res, next) {

	res.render('./views/bot', getMetaData(req));
}


var botMiddleware = function(req,res,next) {
	var ua = req.headers['user-agent'];

	if (debugCrawler) botRoute(req,res,next);
	else if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
		console.log(ua,' is a bot');
		botRoute(req,res,next);
	}

	next();
	

}


module.exports = {
	middleware:botMiddleware
}