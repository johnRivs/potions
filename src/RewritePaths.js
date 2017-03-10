var config = require('./Config');

['sass', 'styles', 'js'].forEach(task => {
    config[task].forEach((style, key) => {
        config[task][key].input = config[task][key].input.map(filename => {
            let prefix = config[task][key].prefix || '';

            return `${config.paths.root}/${config.paths[task]}/${prefix}${filename}`;
        });
    });
});
