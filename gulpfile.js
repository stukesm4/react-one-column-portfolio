'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect'); //runs local dev server
const open = require('gulp-open'); //open url in browser
const browserify = require('browserify'); //bundles js
const reactify = require('reactify'); //jsx to js transformer
const source = require('vinyl-source-stream'); //text stream
const concat = require('gulp-concat'); //concat files

const config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'src/css/portfolio.css'
    ],
    js: './src/**/*.js',
    fonts: [
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
      'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf'
    ],
    mainJs: './src/main.js',
    dist: './dist'
  }
};

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({
      uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch(config.paths.fonts, ['fonts']);
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  gulp.src(config.paths.fonts)
    .pipe(gulp.dest(config.paths.dist + '/fonts'))
    .pipe(connect.reload());
});

gulp.task('default', ['html', 'css', 'js', 'fonts', 'watch', 'open']);
