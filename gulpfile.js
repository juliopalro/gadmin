var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('build-css', function() {
  return gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssmin())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('build-js', function(cb) {
  pump([
    gulp.src([
      './node_modules/jquery/dist/jquery.slim.min.js',
      './node_modules/popper.js/dist/umd/popper.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './src/js/fontawesome-all.js'
      ]), uglify(), concat('bundle.js'),
    gulp.dest('./public/assets/js')
    ], cb);
});

gulp.task('app-sass', function() {
  return gulp.src('./src/sass/app.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('app-sass:watch', function () {
    gulp.watch(['src/sass/**/*.sass'], {cwd: './'}, ['app-sass']);
});

gulp.task('app-js', function(cb) {
  pump([
    gulp.src('./src/js/app.js'),
    // uglify(),
    gulp.dest('./public/assets/js')
    ], cb);
});
gulp.task('app-js:watch', function () {
    gulp.watch(['src/js/app.js'], {cwd: './'}, ['app-js']);
});

gulp.task('build-html', function() {
  return gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./public'));
});
gulp.task('build-html:watch', function () {
    gulp.watch(['src/html/*.html'], {cwd: './'}, ['build-html']);
});

gulp.task('build-img', function() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./public/img'));
});
gulp.task('build-img:watch', function () {
    gulp.watch(['src/img/*'], {cwd: './'}, ['build-img']);
});

gulp.task('build', ['build-html', 'build-js', 'build-css', 'build-img', 'app-sass', 'app-js']);
