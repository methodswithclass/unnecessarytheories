const express = require("express");
const app = express();


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
// // Instruct the app
// // to use the forceSSL
// // middleware
if (process.env.NODE_ENV == "production") app.use(forceSSL());
else {console.log("environment development")}

app.use(express.static(__dirname + "/dist"));


app.listen(process.env.PORT || 8080);