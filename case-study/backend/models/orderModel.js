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