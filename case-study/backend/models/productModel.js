const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(

    {
    //   user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },
      name: {
        type: String
      },
      imagePath: {
        type: String
      },
      price: {
        type: Number
      },
      category: {
        type: String
      },
      description: {
        type: String
      }
    });


    const Product = mongoose.model('product', ProductSchema);

    module.exports = Product;