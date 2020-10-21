const express = require('express');
const index = require('./routes/index');
const campingRoute = require('./routes/campingRoute');

const app = express();

app.use(index);
app.use(campingRoute);

module.exports = app;