var gulp = require('gulp')
    , tslint = require('gulp-tslint');

module.exports = function () {
  let input = this.input(this.srcDir, ['**/*.ts'])

  return gulp.src(input)
      .pipe(tslint({
          formatter: 'prose'
      }))
      .pipe(tslint.report());
}
