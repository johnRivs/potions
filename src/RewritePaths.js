var config = require('./Config');

config.sass.forEach((style, key) => {
    config.sass[key].input = config.sass[key].input.map(filename => {
        let prefix = config.sass[key].prefix || '';

        return `${config.paths.root}/${config.paths.sass}/${prefix}${filename}`;
    });
});

config.js.forEach((style, key) => {
    config.js[key].input = config.js[key].input.map(filename => {
        let prefix = config.js[key].prefix || '';

        return `${config.paths.root}/${config.paths.js}/${prefix}${filename}`;
    });
});

config.styles.forEach((style, key) => {
    config.styles[key].input = config.styles[key].input.map(filename => {
        let prefix = config.styles[key].prefix || '';

        return `${config.paths.root}/${config.paths.styles}/${prefix}${filename}`;
    });
});

config.scripts.forEach((style, key) => {
    config.scripts[key].input = config.scripts[key].input.map(filename => {
        let prefix = config.scripts[key].prefix || '';

        return `${config.paths.root}/${config.paths.js}/${prefix}${filename}`;
    });
});
