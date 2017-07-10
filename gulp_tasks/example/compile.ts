var gulp = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , tsc = require('gulp-typescript')
    , tsProject = tsc.createProject('tsconfig.json');

module.exports = function () {
  let input = this.input(this.srcDir, ['**/*.ts'])

  let tsResult = gulp.src(input)
      .pipe(sourcemaps.init())
      .pipe(tsProject());

  return tsResult.js
      .pipe(sourcemaps.write('.', {sourceRoot: this.srcDir}))
      .pipe(gulp.dest(this.buildDir));

}
