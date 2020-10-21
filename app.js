const express = require('express');
const mongoose = require('mongoose');

const index = require('./routes/index');
const campingRoute = require('./routes/campingRoute');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/camping_fire', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Successful Connected!'))
  .catch((err) => console.error('Failed to Connect to MongoDB ' + err));

app.use(index);
app.use(campingRoute);

module.exports = app;