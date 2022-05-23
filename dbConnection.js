const mongoose = require('mongoose');

const mongoConnection = async (MONGODB_URI) => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
  monogoConnection: mongoConnection,
};
