let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require('gulp-autoprefixer');
let browserSync = require('browser-sync').create();
let concat = require('gulp-concat');
let watch = require('gulp-watch');




gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost/social/'
    });
    });

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade:false }))
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
   gulp.watch('assets/sass/*.scss', ['sass']).on('change', browserSync.reload);
   gulp.watch('assets/sass/**/*.scss', ['sass']).on('change', browserSync.reload);

});

gulp.task('default', ['sass','browser-sync','watch', ]);