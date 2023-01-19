const mongoose = require("mongoose");

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;
console.log(fullDate);

const PhoneSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  rating: {
    type: Number,
  },
  tips: {
    type: String,
  },
  info: {
    type: String,
  },

  postDate: {
    type: String,
    default: fullDate,
  },

  price: {
    type: Number,
  },

  author: {
    type: String,
  },

  goodstuff: {
    type: String,
  },
  badstuff: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Phone", PhoneSchema);
