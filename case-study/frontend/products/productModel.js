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
      image: {
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

// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     productImage: { type: String, required: true }
// });

// module.exports = mongoose.model('Product', productSchema);