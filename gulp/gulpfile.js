let gulp = require('gulp')
let imagemin = require('gulp-imagemin')
let clean = require('gulp-clean')
let uglify = require('gulp-uglify')
let usemin = require('gulp-usemin')
let cssmin = require('gulp-cssmin')
let browserSync = require('browser-sync')
let jshint = require('gulp-jshint')
let jshintStylish = require('jshint-stylish')
let csslint = require('gulp-csslint')
let autoprefixer = require('gulp-autoprefixer')
let less = require('gulp-less')

gulp.task('default', ['copy'], () =>
  gulp.start('build-img', 'usemin'))

gulp.task('clean', () =>
  gulp.src('dist').pipe(clean()))

gulp.task('copy', ['clean'], () =>
  gulp.src('src/**/*').pipe(gulp.dest('dist')))

gulp.task('build-img', () => {
  gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})

gulp.task('usemin', () =>
  gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [autoprefixer({
        browsers: ['last 40 versions'],
        cascade: false
      }), cssmin]
    }))
    .pipe(gulp.dest('dist')))

gulp.task('server', () => {
  browserSync.init({
    server: 'src'
  })

  gulp.watch('src/**/*').on('change', browserSync.reload)

  gulp.watch('src/js/**/*.js').on('change', event =>
    gulp.src(event.path).pipe(jshint()).pipe(jshint.reporter(jshintStylish)))

  gulp.watch('src/css/**/*.css').on('change', event =>
    gulp.src(event.path).pipe(csslint()).pipe(csslint.reporter()))

  gulp.watch('src/less/**/*.less').on('change', event =>
    gulp.src(event.path)
      .pipe(less().on('error', (err) => console.log('ERRO LESS: ', err)))
      .pipe(gulp.dest('src/css')))
})
