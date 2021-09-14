const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

router.post("/products", (req, res) => {
    var newproducts = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    }
    var product = new Product(newproducts)

    product.save().then(() => {
        console.log("New product created!");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    res.send("A new product created with success!")
})

router.get("/products", (req,res) => {
    Product.find().then((product) => {
        res.json(product)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

router.get("/products/:id", (req,res) => {
    Product.findById({id: req.params.id}).then((product) => {
        if(product){
            res.json(product)
        }else{
            res.sendStatus(404);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

module.exports = router;