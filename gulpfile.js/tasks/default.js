const gulp = require('gulp')
const sequence = require('gulp-sequence')

var defaultTask = (callback) => {
  sequence('styles')(callback)
}

gulp.task('default', defaultTask)

module.exports = defaultTask
