var gulp = require("gulp");
var plumber = require('gulp-plumber');
var browserSync =require('browser-sync');
var imagemin = require('gulp-imagemin');
var postcss = require('gulp-postcss');
const autoprefixer = require( 'autoprefixer' );
const flexBugsFixes = require( 'postcss-flexbugs-fixes' );
const clean = require('./tasks/clean');
const { reload, serve } = require('./tasks/server');
var packageImporter = require('node-sass-package-importer');


const autoprefixerOptions = {
	grid: true,
	cascade: false
};

const postcssOptions = [
	flexBugsFixes, autoprefixer( autoprefixerOptions )
];

  gulp.task("js",function(done){
    gulp.src(["./src/js/*.js"])
    .pipe(plumber())
    .pipe(gulp.dest("./dist/js"));
    done();
});

gulp.task('browser-sync', function(done) {
    browserSync({
	    proxy : "webya.local",  // 変更
	    notify: false,
	    open: "external",
    });
    done();
});


gulp.task('imagemin', function(done) {
	gulp.src('./src/images/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/images'))
    done();
});


gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});

function watch(){
    gulp.watch("./src/images/**/*.*", gulp.series('imagemin','js',reload));
    gulp.watch("./src/images/**/**/*.*", gulp.series('imagemin','js',reload));
    gulp.watch("./src/js/*", gulp.series('imagemin','js',reload));
    gulp.watch("./src/**/*.ejs", gulp.series('imagemin','js',reload));
}

gulp.task('default', gulp.series(clean,gulp.parallel('imagemin','js'),serve,watch));
