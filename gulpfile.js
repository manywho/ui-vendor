const gulp = require('gulp');
const gzip = require('gulp-gzip');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    return gulp.src('./dist/**/*.*', {read: false})
        .pipe(clean({force: true}));
});
 
gulp.task('compress and copy vendor files', () => {
    return gulp
        .src('./vendor/**/*.*')
        .pipe(gzip({ append: false }))
        .pipe(gulp.dest('./dist/vendor'));
});
 
gulp.task('compress and copy css assets', () => {
    return gulp
        .src('./css/**/*.*')
        .pipe(gzip({ append: false }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', gulp.series(
    'clean', 
    'compress and copy vendor files', 
    'compress and copy css assets'
));