const mongoose = require('mongoose');

const DBConnectionSetup = (url) => {
    return mongoose.connect(url);
}

module.exports = DBConnectionSetup;