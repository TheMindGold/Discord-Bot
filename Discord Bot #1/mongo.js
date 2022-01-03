const mongoose = require('mongoose');
const config = require('./config.json');

module.exports = async () => {
    await mongoose.connect(config.mongoUrl, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    });
    return mongoose
}

mongoose.connection.on('connected', () => {
    console.log('Connected to Database!')
})