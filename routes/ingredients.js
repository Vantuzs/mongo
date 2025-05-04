const { Router } = require('express');
const IngredientController = require('../controllers/ingredient.controller')

const ingredientRouter = Router();

ingredientRouter.post('/',IngredientController.addIngredient);
ingredientRouter.get('/',IngredientController.getAllIngredients);


module.exports = ingredientRouter;
