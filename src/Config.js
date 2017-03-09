var util       = require('gulp-util'),
    production = util.env.production;

let config = {
    sourcemaps: ! production,
    minify:     production,
    version:    false,
    paths: {
        root:   'resources/assets',
        output: 'public',
        css:    'css',
        sass:   'scss',
        js:     'js'
    },
    sass:    [],
    styles:  [],
    scripts: []
};

module.exports = config;
