(function() {
  'use strict';

  const connect     = require('gulp-connect');
  const gulp        = require('gulp');
  const pug         = require('gulp-pug');
  const webpack     = require('webpack-stream');

  const wpConfig    = require('./webpack.config');


  gulp.task('build', () => {
    return gulp.src('src/js/sytabs.module.js')
      .pipe(webpack(wpConfig))
      .pipe(gulp.dest('dist/'));
  });


  gulp.task('build-html', () => {
    return gulp.src('src/pug/index.pug')
      .pipe(pug())
      .pipe(gulp.dest('demo/'));
  });


  gulp.task('serve', () => {
    connect.server({
      root: ['demo', 'dist'],
      livereload: true
    });
  });


  /**
   *
   */
  gulp.task('watch', () => {
    return gulp.watch('src/**/*', ['build', 'build-html']);
  });

  gulp.task('default', ['watch', 'build', 'build-html', 'serve']);

})();
