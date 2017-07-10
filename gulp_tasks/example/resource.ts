var gulp = require("gulp");

module.exports = function () {
  let input = this.input(this.srcDir, ['**/*', '!**/*.ts'])

  return gulp.src(input)
      .pipe(gulp.dest(this.buildDir));
}
