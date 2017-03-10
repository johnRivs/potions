var gulp         = require('gulp'),
    gulpSass     = require('gulp-sass'),
    minifyCSS    = require('gulp-csso'),
    config       = require('./../Config'),
    rename       = require('gulp-rename'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    fileExists   = require('./../Helpers/FileExists');

module.exports = () => {
    config.sass.forEach(sass => {
        fileExists(sass.input);

        let src = gulp.src(sass.input);

        // Sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.init({largeFile: true}));

        // Sass
        src = src.pipe(gulpSass().on('error', gulpSass.logError));

        // Autoprefix everything
        src = src.pipe(autoprefixer({ browsers: ['last 20 versions'] }));

        // Minify
        if (config.minify) src = src.pipe(minifyCSS());

        // Write inline sourcemaps
        if (config.sourcemaps) src = src.pipe(sourcemaps.write());

        // Rename
        src = src.pipe(rename(sass.output));

        // Save output
        src.pipe(gulp.dest(`${config.paths.output}/${config.paths.styles}`));
    });
};
