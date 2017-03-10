var config = require('./Config');

module.exports = {
    js(input, output) {
        config.js.push({
            input, output
        });

        return this;
    },

    sass(input, output) {
        config.sass.push({
            input, output
        });

        return this;
    },

    styles(input, output) {
        config.styles.push({
            input, output
        });

        return this;
    }
};
