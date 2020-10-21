const express = require('express');
const mongoose = require('mongoose');

const index = require('./routes/index');
const campingRoute = require('./routes/campingRoute');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:aid3g7g21nklan@localhost:27017/camping_fire?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Successful Connected!'))
  .catch((error) => console.error('Failed to Connect to MongoDB ' + error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);
app.use(campingRoute);

module.exports = app;