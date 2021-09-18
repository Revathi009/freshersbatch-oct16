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
      initialDate: {
        type: Date
      },
      deliveryDate: {
        type: Date
      }
    });


    const Order = mongoose.model('order', OrderSchema);

    module.exports = Order;