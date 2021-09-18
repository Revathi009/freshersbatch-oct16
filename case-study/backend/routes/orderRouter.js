const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Order = require('../models/orderModel.js');

router.post("/order", (req,res) => {
    var newOrder = {
        UserID: mongoose.Types.ObjectId(req.body.UserID),
        ProductID: mongoose.Types.ObjectId(req.body.ProductID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    }
    var order = new Order(newOrder)

    order.save().then(() => {
        res.send("Order created with success!")
    }).catch((err)=> {
        if(err){
            throw err
        }
    })
})

router.get("/order", (req,res)=> {
    Order.find().then((products) => {
        res.json(products)
    }).catch((err)=> {
        if(err){
            throw err
        }
    })
})

module.exports = router;

