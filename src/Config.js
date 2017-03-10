var util       = require('gulp-util'),
    production = util.env.production;

module.exports = {
    sourcemaps: ! production,
    minify:     production,
    version:    false,
    paths: {
        root:    'resources/assets',
        output:  'public',
        styles:  'css',
        js:      'js',
        sass:    'scss',
        scripts: 'js'
    },
    sass:    [],
    js:      [],
    styles:  [],
    scripts: []
};
