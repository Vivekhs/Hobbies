var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
//var rename = require('gulp-rename');

// gulp.task('scripts', function() {
//     return gulp.src([
//             'dist/inline.bundle.js',
//             'dist/polyfills.bundle.js',
//             'dist/styles.bundle.js',
//             'dist/vendor.bundle.js',
//             'dist/main.bundle.js'
//         ])
//         .pipe(concat('bundle.js'))
//         .pipe(gulp.dest('public/assets/javascripts/'));
// });

// gulp.task('scripts:watch', function() {
//     gulp.watch([
//         'dist/inline.bundle.js',
//         'dist/polyfills.bundle.js',
//         'dist/styles.bundle.js',
//         'dist/vendor.bundle.js',
//         'dist/main.bundle.js'
//     ], ['scripts']);
// });

gulp.task('sass', function() {
    return gulp.src('src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/stylesheets/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('src/styles.scss', ['sass']);
});


// gulp.task('copy', function() {
//     gulp.src('dist/styles.*.bundle.css')
//         .pipe(gulp.dest('public/stylesheets/'));
// });

// gulp.task('css-copy', function() {
//     gulp.src('dist/**.css')
//         .pipe(rename('styles.css'))
//         .pipe(gulp.dest('public/stylesheets/'));
// });

// gulp.task('css-copy:watch', function() {
//     gulp.watch([
//         'dist/**.css'
//     ], ['css-copy']);
// });


// gulp.task('scripts-copy', function() {
//     return gulp.src(['dist/*.js', 'dist/*.map'])
//         .pipe(gulp.dest('public/assets/javascripts/'));
// });

// gulp.task('scripts-copy:watch', function() {
//     gulp.watch([
//         'dist/*.js',
//         'dist/*.map'
//     ], ['scripts-copy']);
// });
gulp.start(['sass', 'sass:watch']);