const mongoose = require('mongoose');
require('dotenv').config();
const UserSchema = mongoose.Schema({
  Fname: String,
  Lname: String,
  email: String,
  password: String,
  token: String,
  checkbox: Boolean,
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const UserModel = new mongoose.model(process.env.Collection, UserSchema);
module.exports = UserModel;
