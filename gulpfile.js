const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', ['compress']);

gulp.task('compress', () => {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
});