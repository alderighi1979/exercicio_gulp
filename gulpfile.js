const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilarSass () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/styles'))
    }

function minificarImagens () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function minificarJs () {
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/script'))
}

        exports.default = function () {
            gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, compilarSass);
            gulp.watch('./source/images/*', {ignoreInitial:false}, minificarImagens);
            gulp.watch('./source/script/*.js', {ignoreInitial:false}, minificarJs);
        }