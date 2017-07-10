/// <reference path="typings/index.d.ts" />

let conf = require('./gulpfile.json')
    , gulpcontext = require('gulp-context');

gulpcontext.build(conf);
