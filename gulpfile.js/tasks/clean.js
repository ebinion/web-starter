const gulp = require('gulp')
const clean = require('gulp-clean')
const config = require('../config.json')

const cleanTask = (callback) => {
  return gulp.src(config.root.build, {read: false})
    .pipe(clean())
}

gulp.task('clean', cleanTask)

module.exports = cleanTask
