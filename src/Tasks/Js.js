var gulp         = require('gulp'),
    config       = require('./../Config'),
    rename       = require('gulp-rename'),
    uglify       = require('gulp-uglify'),
    sourcemaps   = require('gulp-sourcemaps'),
    rollup       = require('gulp-better-rollup'),
    buble        = require('rollup-plugin-buble'),
    commonjs     = require('rollup-plugin-commonjs'),
    fileExists   = require('./../Helpers/FileExists');

module.exports = () => {
    config.js.forEach(js => {
        fileExists(js.input);

        let src = gulp.src(js.input);

        // Sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.init({largeFile: true}));

        // Rollup
        src = src.pipe(rollup({ plugins: [commonjs(), buble()] }, { format: 'iife' }));

        // Minify
        if (config.minify) src = src.pipe(uglify());

        // Write inline sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.write());

        // Rename
        src = src.pipe(rename(js.output));

        // Save output
        src.pipe(gulp.dest(`${config.paths.output}/${config.paths.js}`));
    });
};
