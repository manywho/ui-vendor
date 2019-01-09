const gulp = require('gulp');
const gzip = require('gulp-gzip');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    return gulp.src('./dist/**/*.*', {read: false})
        .pipe(clean({force: true}));
});
 
gulp.task('compress and copy JS', () => {
    return gulp.src('./vendor/*.js')
        // only top level js files in vendor directory will be compressed
        .pipe(gzip({ append: false }))
        .pipe(gulp.dest('./dist/vendor'));
});
 
gulp.task('copy CSS assets', () => {
    return gulp.src('./css/**/*.*')
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy tinyMCE assets', () => {
    return gulp.src('./vendor/tinymce/**/*.*')
        .pipe(gulp.dest('./dist/vendor/tinymce'));
});

gulp.task('copy vendor.json', () => {
    return gulp.src('./vendor/vendor.json')
        .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('build', gulp.series(
    'clean', 
    [
        'compress and copy JS', 
        'copy CSS assets', 
        'copy tinyMCE assets',
        'copy vendor.json'
    ]
));