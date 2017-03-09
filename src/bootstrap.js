var colors       = require('colors'),
    PotionsError = require('./Helpers/PotionsError');

process.on('uncaughtException', err => {
    if (err instanceof PotionsError) {
        console.log(
            colors.red(
                err.toString().replace(
                    /#(.*)#/,
                    colors.bgRed.white('$1')
                )
            )
        );
    } else {
        console.log(err);
    }

    process.exit(1);
});
