require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const userControllers = require('./Controllers/controllers');
app.use(express.json());
app.use(express.urlencoded());
require('./DB/conn');
app.use(cors());
app.post('/Register', userControllers.Register);
app.post('/Login', userControllers.Login);
app.post('/Forget', userControllers.Forget);
app.post('/Update', userControllers.update);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
