'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,components}/**/*.scss',
    paths.src + '/{app,components}/**/*.js',
    paths.src + '/assets/*.scss',
    'bower.json'
  ], ['jshint', 'test', 'build']);
});