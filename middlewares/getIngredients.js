const {Ingredient} = require('../models/index')

// module.exports.getIngredients = async (req,res,next) =>{
//     try {
//         const {body: {ingredients}} = req;

//         const ingredientObject = await Ingredient.find({
//             name: ingredients[0]
//         });

//         console.log(ingredientObject);

//         // next()
//     } catch (error) {
//         next(error)
//     }
// }

// module.exports.getIngredients = async (req,res,next) =>{
//     try {
//         const {body: {ingredients}} = req;

//         const ingredientObject = await Promise.all(
//             ingredients.map(async (a)=>{
//             return await Ingredient.find({
//                 name: a
//             });
//         }))
//         const allIngreditns = ingredientObject.flat()

//         console.log(allIngreditns);

//         // next()
//     } catch (error) {
//         next(error)
//     }
// }


module.exports.getIngredients = async (req,res,next) =>{
    try {
        const {body: {ingredients}} = req;

        const ingredientsObjectIdArray = [];

        for(let i = 0;i<ingredients.length;i++){
            const ingredientObject = await Ingredient.findOne({
                name: ingredients[i]
            });

            ingredientsObjectIdArray.push(ingredientObject['_id'])
        }
        
        req.ingredients = ingredientsObjectIdArray
        next()
    } catch (error) {
        next(error)
    }
}