const gulp = require("gulp");

module.exports = function(options) {
  const fromSrc = options.fromSrc;
  const toSrc = options.toSrc;
  const taskName = options.taskName;
  return function() {
    return gulp
      .src(`${fromSrc}/assets/**/*.*`, { since: gulp.lastRun(taskName) })
      .pipe(gulp.dest(`${toSrc}/assets/`));
  };
};
