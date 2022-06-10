const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const runTimestamp = Math.round(Date.now()/1000);
const browsersync = require('browser-sync').create();

//Sass compiler

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

//Css lint

gulp.task('lint-css', function lintCssTask() {
    return gulp.src('app/css/**/*.css')
      .pipe(gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
       }));
});

//Autoprefixer 

gulp.task('autoprefix', function() {
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

//Iconfont

const fontName = 'Icons';
 
gulp.task('iconfont', function(){
  gulp.src(['app/images/*.svg'])
     .pipe(iconfontCss({
        path: 'app/scss/base/_icons_template.scss',
        fontName: fontName,
        targetPath: '../scss/base/_icons.scss',
        fontPath: '../fonts/'
     }))
     .pipe(iconfont({
        fontName: fontName,
        normalize:true,
        fontHeight: 1001
     }))
     .pipe(gulp.dest('app/fonts/'));
});

//Browsersync

gulp.task('start', function(cb){
  browsersync.init({
    server: {
      baseDir: './app' 
    }
  });
  cb();
});

//Watch task

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});

