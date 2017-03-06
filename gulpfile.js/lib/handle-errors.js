// https://github.com/vigetlabs/gulp-starter/blob/master/gulpfile.js/lib/handleErrors.js
var notify = require("gulp-notify")

const handleErrors = function(errorObject, callback) {
  notify.onError(errorObject.toString().split(': ').join(':\n')).apply(this, arguments)
  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') this.emit('end')
}

module.exports = handleErrors
