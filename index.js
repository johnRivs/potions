var gulp   = require('gulp'),
    config = require('./src/Config'),
    js     = require('./src/Tasks/Js'),
    mixer  = require('./src/Mixer.js'),
    sass   = require('./src/Tasks/Sass'),
    styles = require('./src/Tasks/Styles');

require('./src/bootstrap');

module.exports = recipe => {
    recipe(mixer);

    require('./src/RewritePaths');

    let tasks = ['sass', 'styles', 'js'];

    gulp.task('sass', sass);
    gulp.task('styles', styles);
    gulp.task('js', js);

    gulp.task('default', tasks);

    gulp.task('watch', tasks, () => {
        gulp.watch(`${config.paths.root}/${config.paths.styles}/**/*`, ['styles']);
        gulp.watch(`${config.paths.root}/${config.paths.sass}/**/*`, ['sass']);
        gulp.watch(`${config.paths.root}/${config.paths.js}/**/*`, ['js']);
    });
};
