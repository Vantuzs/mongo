const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');
const { errorHanler } = require('./errorHandler');

app.use(express.json());

app.get('/',SaladController.getAllSalads);
// POST http:/localhost:5000/
app.post('/',SaladController.createSalad);
// GET http://localhost:5000/6815c82f4cdd5fa9c810f0f9
app.get('/:saladId',SaladController.getSalad);
app.put('/:saladId',SaladController.updateSalad);
app.delete('/:saladId',SaladController.deleteSalad)

app.use(errorHanler)


module.exports = app;