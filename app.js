const express = require('express');
const app = express();

app.use(express.json());

app.get('/');
app.post('/');
app.get('/:salatId');
app.put('/:salatId');
app.delete('/:salatId')


module.exports = app;