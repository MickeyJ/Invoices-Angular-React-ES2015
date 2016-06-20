var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('connect', () =>{
  connect.server({
    root: './',
    port: 8080,
    livereload: true,
    fallback: 'index.html'
  });
});

gulp.task('angular-react', () =>{
  return (
    browserify({
      entries: './src/index.js',
      extensions: ['.js'],
      debug: true
    })
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'))
  )
});

gulp.task('watch', () =>{
  gulp.watch('./src/**/*.js', ['angular-react']);
});

gulp.task('default', ['connect', 'angular-react', 'watch']);