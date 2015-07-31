'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var ngConstant = require('gulp-ng-constant');
var rename = require('gulp-rename');

gulp.task('config', function () {
    var myConfig = require('./config.json');
    var env = process.env.NODE_ENV  || 'development';
    var envConfig = myConfig[env];
    return ngConstant({
        name: 'environment',
        constants: envConfig,
        stream: true
      })
    .pipe(rename('environment.js'))
    .pipe(gulp.dest('./src/app/'));
});
