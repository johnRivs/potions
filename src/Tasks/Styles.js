var gulp         = require('gulp'),
    minifyCSS    = require('gulp-csso'),
    concat       = require('gulp-concat'),
    config       = require('./../Config'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    fileExists   = require('./../Helpers/FileExists');

module.exports = () => {
    config.styles.forEach(style => {
        fileExists(style.input);

        let src = gulp.src(style.input);

        // Sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.init({largeFile: true}));

        // Concatenate all the files
        src = src.pipe(concat(style.output));

        // Autoprefix everything
        src = src.pipe(autoprefixer({ browsers: ['last 20 versions'] }));

        // Minify
        if (config.minify) src = src.pipe(minifyCSS());

        // Write inline sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.write());

        // Save output
        src.pipe(gulp.dest(`${config.paths.output}/${config.paths.styles}`));
    });
};
