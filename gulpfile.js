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
var ejs = require("gulp-ejs");
var rename = require('gulp-rename');


const autoprefixerOptions = {
	grid: true,
	cascade: false
};

const postcssOptions = [
	flexBugsFixes, autoprefixer( autoprefixerOptions )
];

gulp.task( "ejs", function () {
    return gulp.src(["./src/**/*.ejs", '!' + "./src/**/_*.ejs"])
      .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe( gulp.dest( "./dist" ) );
    done();
  });


  gulp.task("js",function(done){
    gulp.src(["./src/js/*.js"])
    .pipe(plumber())
    .pipe(gulp.dest("./dist/js"));
    done();
});

gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: "./dist/",
            index: "index.html",
        }
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
    gulp.watch("./src/images/**/*.*", gulp.series('ejs','imagemin','js',reload));
    gulp.watch("./src/images/**/**/*.*", gulp.series('ejs','imagemin','js',reload));
    gulp.watch("./src/js/*", gulp.series('ejs','imagemin','js',reload));
    gulp.watch("./src/**/*.ejs", gulp.series('ejs','imagemin','js',reload));
}

gulp.task('default', gulp.series(clean,gulp.parallel('ejs','imagemin','js'),serve,watch));
