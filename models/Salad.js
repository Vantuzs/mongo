const mongoose = require('mongoose');
const {Schema} = mongoose;

const saladSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: Number,
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    sauce: String,
    dietType: String,
    spicy: Boolean,
    expired: {
        type: Date,
        required: true,
        validate: {
            validator: (value)=>value>=new Date(),
            message: 'Salad is expired'
        }
    }

});

const Salad = mongoose.model('Salad',saladSchema);

module.exports = Salad;