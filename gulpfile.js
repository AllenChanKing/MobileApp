// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var minifycss  = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    gulp.src('./js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(notify('scripts task complete'));
});
gulp.task('css', function() {
    gulp.src('./css/main.css')
        .pipe(rename('main.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'))
        .pipe(notify('css task complete'));
});

gulp.task('clean', function() { 
   gulp.src(['dist/*.*'], {read: false})
    	.pipe(clean())
        .pipe(notify('clean task complete'));
});

gulp.task('dev',function(){
	gulp.run('scripts','css');
});
gulp.task('default',['clean'],function(){
	gulp.run('scripts','css');
    gulp.watch('./js/main.js', ['scripts']);
    gulp.watch('./css/main.css', ['css']);
});

