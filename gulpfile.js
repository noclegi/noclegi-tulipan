var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var Server = require('./app/server.js');

gulp.task('compile-stylus', function() {
  gulp.src('./css/**/*.styl')
    .pipe(concat('all.styl'))
    .pipe(stylus())
    .pipe(gulp.dest('./compiled/public'));
});

gulp.task('start-server', ['compile-stylus'], function() {
  var port = process.env.PORT | 3000;
  var server = new Server();
  console.log('Listening at port ' + port);
  server.listen(port);
});

