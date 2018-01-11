var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('prod-files-copy', function() {
    gulp.src('dist/*.js')
        .pipe(rename((path) => {
            let sections = (path.basename).split('.');
            path.basename = sections[0] + '.' + sections[2];
        }))
        .pipe(gulp.dest("public/assets/javascripts"));

    gulp.src('dist/*.css')
        .pipe(rename((path) => {
            path.basename = 'styles';
        }))
        .pipe(gulp.dest("public/assets/stylesheets"));
});

// gulp.task('scripts-copy:watch', function() {
//     gulp.watch([
//         'dist/**.css'
//     ], ['css-copy']);
// });

gulp.start(['prod-files-copy']);