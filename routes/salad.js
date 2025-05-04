const { Router } = require('express');
const SaladController = require('../controllers/salad.controller');
const { getIngredients } = require('../middlewares/getIngredients');

const saladRouter = Router();


saladRouter.get('/',SaladController.getAllSalads);
// POST http:/localhost:5000/
saladRouter.post('/',getIngredients,SaladController.createSalad);
// GET http://localhost:5000/6815c82f4cdd5fa9c810f0f9
saladRouter.get('/:saladId',SaladController.getSalad);
saladRouter.put('/:saladId',SaladController.updateSalad);
saladRouter.delete('/:saladId',SaladController.deleteSalad);

module.exports = saladRouter;