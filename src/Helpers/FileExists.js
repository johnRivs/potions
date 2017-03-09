var fs           = require('fs'),
    PotionsError = require('./PotionsError');

module.exports = file => {
    if (Array.isArray(file)) {
        file.forEach(file => {
            fs.stat(file, err => {
                if (err) throw new PotionsError(`The file #${file}# doesn't exist.`);
            });
        });
    } else {
        fs.stat(file, err => {
            if (err) throw new PotionsError(`The file #${file}# doesn't exist.`);
        });
    }

    return true;
};
