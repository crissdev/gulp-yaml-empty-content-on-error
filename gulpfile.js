var plumber = require('gulp-plumber');
var yaml = require('gulp-yaml');
var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('*.yml').
      pipe(plumber({errorHandler: err => console.log(err.message)})).
      pipe(yaml()).
      pipe(gulp.dest('dist'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch('*.yml', ['default']);
});
