// Imports
const autoprefixer = require('gulp-autoprefixer')
const config = require('../config')
const gulp = require('gulp')
const handleErrors = require('../lib/handle-errors')
const gulpif = require('gulp-if')
const path = require('path')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

// Paths
const paths = {
  src: path.join(config.root.src, config.tasks.styles.src, '/**/*.{' + config.tasks.styles.extensions + '}'),
  build: path.join(config.root.build, config.tasks.styles.build),
}

const stylesTask = (callback) => {
  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .on('error', handleErrors)
    .pipe(sass(config.tasks.styles.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.styles.autoprefixer))
    .on('error', handleErrors)
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build))
}

gulp.task('styles', stylesTask)

module.exports = stylesTask
