var browserify = require('browserify');

gulp.task('mytask', function() {
   return browserify('./js/myapp)
          .bundle({ debug : true})
          .pipe(source('bundle.js')
          .pipe(gulp.dest('.'))

});
