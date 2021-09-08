const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FruitSchema = new Schema ({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    quantity:{
        type: Number
    }
});

const Fruit = mongoose.model('fruit' , FruitSchema);

module.exports = Fruit;
