const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      minifyCSS: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('lib/views'));
});