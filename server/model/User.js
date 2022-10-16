// create the scema
const mongoose = require("mongoose")

var schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  type: {
    type: String
  },
  email: {
    type: String,
    required: true,
    uniq: true
  },
  status: String
 });

 const Userdb = mongoose.model('users', schema)
 module.exports = Userdb;