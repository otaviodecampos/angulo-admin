var gulp = require("gulp");

module.exports = function () {
  return gulp.src(this.lib
      , {cwd: "node_modules/**"})
      .pipe(gulp.dest(this.buildDir + '/lib'));
}
