const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(
  `mongodb+srv://${process.env.MONGO_URL}@phonereviewapp.kbna8.mongodb.net/phoneReviewDatabase?retryWrites=true&w=majority`,
  () => {
    console.log("db connected");
  }
);

module.exports = db;
