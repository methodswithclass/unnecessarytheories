var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
watch = require("gulp-watch"),
shell = require("gulp-shell"),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
cache = require('gulp-cache'),
del = require('del'),
inject = require('gulp-inject'),
angularFilesort = require('gulp-angular-filesort'),
order = require("order"),
filter = require("gulp-filter"),
merge = require("merge-stream"),
mainBowerFiles = require("main-bower-files");

gulp.task("serve", ["watch"], shell.task("node server.js"));

gulp.task('watch', ["build"], function() {

	gulp.watch(["./src/**/*.*", "./server/**/*.*"], ["build"]);

});

gulp.task('styles', function() {
	return gulp.src('src/assets/css/**/*.css', { style: 'expanded' })
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	// .pipe(concat("styles.css"))
	// .pipe(rename({suffix: '.min'}))
	// .pipe(uglify())
	.pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', ['vendor'], function() {
	return gulp.src([
	            "src/features/data/dataModule.js",
	            "src/features/state/stateModule.js",
	            "src/features/blog/blogModule.js",
	            "src/features/FBui/FBui.module.js",
	            "src/features/badges/badgesModule.js",
	            "src/features/**/*.js",
	            "src/features/app/app.js"
	            ])
	// .pipe(jshint('.jshintrc'))
	// .pipe(jshint.reporter('default'))
	.pipe(concat('main.js'))
	// .pipe(rename({suffix: '.min'}))
	// .pipe(uglify())
	.pipe(gulp.dest('dist/assets/js'));
});

gulp.task("vendor", function () {

	var js = gulp.src(mainBowerFiles(), { base: __dirname + '/bower_components' })
	.pipe(filter("**/*.js"))
	.pipe(concat("vendor.js"))
	// .pipe(rename({suffix: '.min'}))
	// .pipe(uglify())
	.pipe(gulp.dest("dist/assets/js"));

	var css = gulp.src(mainBowerFiles())
	.pipe(filter("**/*.css"))
	.pipe(concat("vendor.css"))
	// .pipe(rename({suffix: '.min'}))
	// .pipe(uglify())
	.pipe(gulp.dest("dist/assets/css"));

	return merge(js, css);
});

gulp.task("html", function () {

	return gulp.src('src/assets/**/*.html')
	.pipe(gulp.dest("dist/assets/"))
});

gulp.task('images', function() {
	return gulp.src('src/assets/img/**/*')
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	.pipe(gulp.dest('dist/assets/img'));
});

gulp.task('fonts', function () {

	return gulp.src("src/assets/css/**/*.*")
	.pipe(gulp.dest("dist/assets/css"))
});

gulp.task("misc", function () {

	var toRoot = gulp.src(["./favicon.ico", "src/data.json"])
	.pipe(gulp.dest("dist"));

	var files = gulp.src("src/assets/files/**/*.*")
	.pipe(gulp.dest("dist/assets/files"));

	return merge(toRoot, files);
})

gulp.task('index', ["styles", "scripts", 'html', "fonts", "images", "misc"], function () {

	// It's not necessary to read the files (will speed up things), we're only after their paths: 
	var important = gulp.src('dist/assets/js/vendor.js', {read: false});
	var standard = gulp.src(["dist/assets/js/main.js", 'dist/assets/**/*.css'], {read:false});

	return gulp.src('src/index.html')
	.pipe(inject(important, {ignorePath:"dist", starttag: '<!-- inject:head:{{ext}} -->'}))
	.pipe(inject(standard, {ignorePath:"dist"}))
	.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return del('dist');
});

gulp.task('build', ['clean'], function() {
	gulp.start("index");
});


// gulp.task('serve', ["build"], function() {
// 	nodemon({
// 		script:"server.js",
// 		ext:"html js css scss",
// 		tasks:["build"]
// 	});
// });






