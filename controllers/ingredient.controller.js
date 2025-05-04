const {Ingredient} = require('../models/index');

module.exports.addIngredient = async(req,res,next) =>{
    try {
        const {body} = req;

        const create = await Ingredient.create(body);

        if(!create){
            return res.status(404).send('Ingredient not foudn =(');
        }

        return res.status(201).send(create);
    } catch (error) {
        next(error);
    }
}

module.exports.getAllIngredients = async(req,res,next) =>{
    try {
        const allIngreditns = await Ingredient.find();

        if(!allIngreditns || allIngreditns.length<1){
            return res.status(404).send('Ingredients not foudn =(');
        }

        return res.status(200).send(allIngreditns);


    } catch (error) {
        next(error)
    }
}