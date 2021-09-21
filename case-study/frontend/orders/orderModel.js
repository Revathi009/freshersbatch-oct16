// const mongoose = require('mongoose');

// const orderSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     product: 
//     { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: 'Product', 
//       required: true 
//     },
//     quantity: 
//     { 
//       type: Number, default: 1 
//     }
// });

// module.exports = mongoose.model('Order', orderSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(

    {
        UserID: {
        type: mongoose.SchemaTypes.ObjectId
      },
      ProductID: {
        type: mongoose.SchemaTypes.ObjectId
      },
    });


    const Order = mongoose.model('order', OrderSchema);

    module.exports = Order;