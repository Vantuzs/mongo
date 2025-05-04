const mongoose = require('mongoose');
const {Schema} = mongoose;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

const Ingredient = mongoose.model('Ingredient',ingredientSchema);

module.exports = Ingredient;