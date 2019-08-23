const mongoose = require('mongoose');

module.exports = function () {
    console.log('DB CONNECTION', process.env.DB_HOST);
    mongoose.connect(`mongodb://${process.env.DB_HOST}/Hotel`, {useNewUrlParser: true}, function (err) {
        err && console.log(err);
        console.log('Database connected successfully!');
    });
};