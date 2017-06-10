const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const bot = require("./server/bot");
const middleware = require("./server/middleware");

var refreshPages = [
"home"
]

app.set('view engine', 'jade');

app.use(bot.middleware);
app.use(middleware.refresh());
// if  (process.env.NODE_ENV == "production") app.use(middleware.forceSSL());
// else {console.log("environment development");}
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use("/dist/assets/css", express.static(path.join(__dirname, "dist/assets/css")));
app.use("/dist/assets/css/museo", express.static(path.join(__dirname, "dist/assets/css/museo")));
app.use("/dist/assets/js", express.static(path.join(__dirname, "dist/assets/js")));
app.use("/dist/assets/img", express.static(path.join(__dirname, "dist/assets/img")));
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/blog/*", express.static(path.join(__dirname, "dist")));


var listener = app.listen(process.env.PORT || 8080, function () {

	console.log("listening on port", listener.address().port);
});