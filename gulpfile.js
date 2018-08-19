var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('default', function() {
  // place code for your default task here
  return console.log('Gupl is running');
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('jshost/jquery.min.js'),
        uglify(),
        gulp.dest('jshost/')
    ],
    cb
  );
});

 
gulp.task('scripts', function() {
  return gulp.src('globalassets/js/components/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});