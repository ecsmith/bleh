//load plugins
var gulp             = require('gulp'),
	compass          = require('gulp-compass'),
	autoprefixer     = require('gulp-autoprefixer'),
	minifycss        = require('gulp-minify-css'),
	uglify           = require('gulp-uglify'),
	rename           = require('gulp-rename'),
	concat           = require('gulp-concat'),
	notify           = require('gulp-notify'),
	livereload       = require('gulp-livereload'),
	plumber          = require('gulp-plumber'),
	wait 			 = require('gulp-wait'),
	path             = require('path'),
	browserSync 	 = require('browser-sync').create();

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
	title: 'Gulp',
	icon: path.join(__dirname, 'gulp.png')
};

// gulp.task('default', ['live']);

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
		title: notifyInfo.title,
		icon: notifyInfo.icon,
		message: "Error: <%= error.message %>"
	})
};

//styles
gulp.task('styles', function() {
	return gulp.src(['src/scss/**/*.scss'])
		.pipe(plumber(plumberErrorHandler))
		.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'css/images'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('deploy/css'))
		.pipe(browserSync.stream());
});

//scripts
gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
		.pipe(plumber(plumberErrorHandler))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(rename({ suffix: '.min' }))
});


//watch
gulp.task('default', function() {
	livereload.listen();
	//watch .scss files
	gulp.watch('sass/**/*.scss', ['styles']);

	//watch .js files
	gulp.watch('js/**/*.js', ['scripts']);


	browserSync.init({
       	open: false,
        server: {
            baseDir: "./",
        }
    });

	gulp.watch(['**/*.html', 'css/style.css', 'js/main.js']).on('change', browserSync.reload);

	
});