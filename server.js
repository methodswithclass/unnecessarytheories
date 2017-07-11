const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const bot = require("./server/bot");
const middleware = require("./server/middleware");


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/server'));


// app.use(middleware.accessControl());


app.use(middleware.refresh());
if  (process.env.NODE_ENV == "production") app.use(middleware.ssl());
else {console.log("environment development");}
app.use(bot.middleware);
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/blog/*", express.static(path.join(__dirname, "dist")));
app.use("/assets/img/*", express.static(path.join(__dirname, "dist/assets/img")));


var listener = app.listen(process.env.PORT || 8080, function () {

	console.log("listening on port", listener.address().port);
});



