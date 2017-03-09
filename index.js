var gulp   = require('gulp'),
    config = require('./src/Config'),
    sass   = require('./src/Tasks/Sass'),
    styles = require('./src/Tasks/Styles');

require('./src/bootstrap');

module.exports = overrides => {
    config = Object.assign(config, overrides);

    require('./src/RewritePaths');

    let tasks = ['sass', 'styles'];

    gulp.task('sass', sass);
    gulp.task('styles', styles);

    gulp.task('default', tasks);

    gulp.task('watch', tasks, () => {
        gulp.watch(`${config.paths.root}/${config.paths.css}/**/*`, ['styles']);
        gulp.watch(`${config.paths.root}/${config.paths.sass}/**/*`, ['sass']);
    });
};
