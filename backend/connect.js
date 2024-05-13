const mongoose = require("mongoose");

mongoose.connect;

const connectToMongoDB = (url) => {
  return mongoose.connect(url);
};

module.exports = { connectToMongoDB };
