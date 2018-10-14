
var gulp = require("gulp");
var merge = require("merge-stream");
var imagemin = require('gulp-imagemin');


var reporters = [
{
	index:0,
	name:"custom"
},
{
	index:1,
	name:"stylish"
}
]

var whichReporter = 1;

var htmlDest = "dist/";


var mainScripts = [
    "src/assets/js/**/*.js",
    "src/features/data/dataModule.js",
    "src/features/data/models/blog.js",
    "src/features/state/stateModule.js",
    "src/features/services/serviceModule.js",
    "src/features/blog/blogModule.js",
    "src/features/FBui/FBui.module.js",
    "src/features/badges/badgesModule.js",
    "src/features/**/*.js",
    "src/features/app/app.js"
]


var sassStyles = [
	"src/assets/css/classes.scss",
	"src/assets/css/styles.scss"
]

var cssStyles = [
	'temp/**/*.css',
	"node_modules/@fortawesome/fontawesome-free/css/all.css"
]


var shimFile = "node_modules/@babel/polyfill/dist/polyfill.js";


var vendorScripts = [
	"node_modules/jquery.scrollto/jquery.scrollTo.js",
	"node_modules/mc-shared/shared.js"
]


var miscSrc = [
	'src/assets/config/**/*.*'
]


// var minify = process.env.NODE_ENV == "production";

var minify = {
	main:{
		full:{
			make:false,
			inject:false
		},
		min:{
			make:true,
			inject:true
		}
	},
	vendor:{
		full:{
			make:true,
			inject:true
		},
		min:{
			make:false,
			inject:false
		}
	}
}




var livereloadPort = 3840;


module.exports = {
	gulp:{
		shimFile:shimFile,
		htmlDest:htmlDest,
		mainScripts:mainScripts,
		vendorScripts:vendorScripts,
		sassStyles:sassStyles,
		cssStyles:cssStyles,
		miscSrc:miscSrc,
		minify:minify,
		reporters:reporters,
		reporter:whichReporter
	},
	livereloadPort:livereloadPort
}



