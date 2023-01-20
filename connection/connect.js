const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(process.env.DB, () => {
  console.log("db connected");
});

module.exports = db;
