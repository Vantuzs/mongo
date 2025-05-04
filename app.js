const express = require('express');
const app = express();
const { errorHanler } = require('./errorHandler');
const router = require('./routes');

app.use(express.json());

app.use('/api',router)

app.use(errorHanler)


module.exports = app;