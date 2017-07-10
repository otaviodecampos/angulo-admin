var gulp = require("gulp");

module.exports = function () {
  gulp.watch(this.input(this.srcDir, ['**/*.ts']), ['compile']).on('change', function (e) {
      console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
  });

  gulp.watch(this.input(this.srcDir, ['**/*.html', '**/*.css']), ['resource']).on('change', function (e) {
      console.log('Resource file ' + e.path + ' has been changed. Updating.');
  });

}
