/*jslint node: true */
/*jshint strict:false */
'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('lint', function() {
    return gulp.src(['./app/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'));
})

gulp.task('default', ['lint']);

gulp.task('watch', function(){
    gulp.watch(['app/*.js','app/**/*.js'], ['lint']);
})
