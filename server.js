const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const bot = require("./server/bot");
const middleware = require("./server/middleware");


var livereloadPort = 3020;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/server'));


// app.use(middleware.accessControl());


var PORTS = {
	heroku:8080,
	http:80,
	livereload:livereloadPort,
	misc1:3000,
	misc2:4200,
	misc3:4210
}



app.use(bot.middleware);
app.use(middleware.refresh());
if  (process.env.NODE_ENV == "production") app.use(middleware.ssl());
else {console.log("environment development");}
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/blog/*", express.static(path.join(__dirname, "dist")));
app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use("/files", express.static(path.join(__dirname, "public/files")));


app.use(require('connect-livereload')({
	port: PORTS.livereload
}));


var env = process.env.NODE_ENV;
var port;

	
if (process.env.PORT) {
	port = process.env.PORT;
}
else if (env == "production") {

	port = PORTS.heroku;

}
else if (env == "development") {

	port = PORTS.misc2;
}
else {

	port = PORTS.misc1;
}



var listener = app.listen(port, function () {

	console.log("listening on port", listener.address().port);
});


