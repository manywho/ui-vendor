const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    return gulp.src('./dist/**/*.*', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('compress and copy vendor files', () => {
    return gulp
        .src('./vendor/**/*.*')
        .pipe(gulp.dest('./dist/js/vendor'));
});

gulp.task('build', gulp.series(
    'clean',
    'copy vendor files',
));
