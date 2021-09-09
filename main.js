const express = require('express');
const app = express();

app.use('/categories',require('./app/app'));
module.exports = app;