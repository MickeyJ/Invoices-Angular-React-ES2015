var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass    = require('gulp-sass');

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
    .pipe(gulp.dest('./client/'))
  )
});

gulp.task('connect', () =>{
  connect.server({
    root: './',
    port: 8080,
    livereload: true,
    fallback: './index.html'
  });
});

// gulp.task('sass', () =>{
//   gulp.src('src/scss/main.scss')
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }))
//     .pipe(gulp.dest('public/stylesheets'));
// });

gulp.task('watch', () =>{
  gulp.watch('./src/**/*.js', ['angular-react']);
  // gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'angular-react', 'watch']);