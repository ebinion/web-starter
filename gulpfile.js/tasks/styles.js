// Imports
const autoprefixer = require('gulp-autoprefixer')
const config = require('../config')
const gulp = require('gulp')
const handleErrors = require('../lib/handle-errors')
const notify = require('gulp-notify')
const path = require('path')
const sass = require('gulp-sass')
const sequence = require('gulp-sequence')

// Paths
const paths = {
  src: path.join(config.root.src, config.tasks.styles.src, '/**/*.{' + config.tasks.styles.extensions + '}'),
  build: path.join(config.root.build, config.tasks.styles.build),
}

const stylesTask = (callback) => {
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.styles.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.styles.autoprefixer))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build))
}

gulp.task('styles', stylesTask)

module.exports = stylesTask
