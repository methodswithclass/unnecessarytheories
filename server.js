const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const serveIndex = require('serve-index')

const app = express();

const bot = require("./server/bot");
const middleware = require("./server/middleware");



app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/server'));


// app.use(bot.middleware);
// app.use(middleware.refresh());
// if  (process.env.NODE_ENV == "production") app.use(middleware.forceSSL());
// else {console.log("environment development");}
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use("/assets/css", express.static(path.join("app/dist/assets/css")));
app.use("/assets/css/museo", express.static(path.join("app/dist/assets/css/museo")));
app.use("/assets/js", express.static(path.join("app/dist/assets/js")));
app.use("/assets/img", express.static(path.join("app/dist/assets/img")));
// app.use("/", express.static(path.join(__dirname + "/")));
app.use('/', serveIndex(__dirname + '/', {'icons': true}))
app.use("/blog/*", express.static(path.join(__dirname, "app/dist")));


var listener = app.listen(process.env.PORT || 8080, function () {

	console.log("listening on port", listener.address().port);
});