// create the scema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  age: {
    type: Number
  },
  type: {
    type: String
  },
  email: {
    type: String
  }
 });

module.exports = mongoose.model("User", userSchema);