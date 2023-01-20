const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(
  "mongodb+srv://admin:12345@phonereviewapp.kbna8.mongodb.net/phoneReviewDatabase?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
  }
);

module.exports = db;
