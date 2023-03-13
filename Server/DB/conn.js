require('dotenv').config();
const mongoose = require('mongoose');
module.exports = mongoose
  .connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log(err);
  });
