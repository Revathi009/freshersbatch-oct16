// const { response } = require('express');
// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();


  
// const Order = require('./orderModel');
// const axios = require('axios');

// router.post("/order", (req,res) => {
//     var newOrder = {
//         UserID: mongoose.Types.ObjectId(req.body.UserID),
//         ProductID: mongoose.Types.ObjectId(req.body.ProductID),
//         initialDate: req.body.initialDate,
//         deliveryDate: req.body.deliveryDate
//     }
//     var order = new Order(newOrder)

//     order.save().then(() => {
//         res.send("Order created with success!")
//     }).catch((err)=> {
//         if(err){
//             throw err
//         }
//     })
// })

// router.get("/order", (req,res)=> {
//     Order.find().then((products) => {
//         res.json(products)
//     }).catch((err)=> {
//         if(err){
//             throw err
//         }
//     })
// })

// router.get('/order/:id', (req, res) => {
//     Order.findById(req.params.id).then((order)=>{
//         if(Order){
//             axios.get("http://localhost:4000/api/register" + order.UserID).then((response) => {

//                 var orderObject = { username: response.data.name, name: ''}

//                 axios.get("http://localhost:3000/api/product/" + order.ProductID).then((response)=>{
//                     orderObject.name = response.data.name
//                     res.json(orderObject)
//                 })
//             })
            
           
//         }
//         else{
//             res.send("Invalid order")
//         }
//     })
// })

// module.exports = router;

// const { Order, ProductCart } = require("./orderModel");

// exports.getOrderById = (req, res, next, id) => {
//   Order.find({user:id})
//     .populate("products.product", "name price")
//     .exec((err, order) => {
//       if (err) {
//         return res.status(400).json({
//           error: "NO order found in DB"
//         });
//       }
//       req.order = order;
//       next();
//     });
// };

// exports.createOrder = (req, res) => {
//     const order = new Order(req.body);
//  // const order = new Order(req.body.order);
//   order.save((err, order) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Failed to save your order in DB"
//       });
//     }
//     res.json(order);
//   });
// };



// exports.getOrder = (req, res) => {
 
//   return res.json(req.order);
// };


// module.exports = router;
