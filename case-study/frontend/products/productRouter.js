const express = require('express');
const router = express.Router();
const Product = require('../products/productModel');

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

router.delete("/products/:id", (req,res) => {
    Product.findOneAndRemove(req.params.id).then(()=> {
        res.send("Product removed with success!")
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require('path')
// var tempPath = req.file.path,


// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter
// });

// const Product = require("./productModel");

// router.get("/", (req, res, next) => {
//   Product.find()
//     .select("name price _id productImage")
//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         products: docs.map(doc => {
//           return {
//             name: doc.name,
//             price: doc.price,
//             productImage: doc.productImage,
//             _id: doc._id,
//             request: {
//               type: "GET",
//               url: "http://localhost:3000/products/" + doc._id
//             }
//           };
//         })
//       };
//       //   if (docs.length >= 0) {
//       res.status(200).json(response);
//       //   } else {
//       //       res.status(404).json({
//       //           message: 'No entries found'
//       //       });
//       //   }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.post("/", upload.single('productImage'), (req, res, next) => {
//   const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price,
//     productImage: tempPath
//   });
//   product
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: "Created product successfully",
//         createdProduct: {
//             name: result.name,
//             price: result.price,
//             _id: result._id,
//             request: {
//                 type: 'GET',
//                 url: "http://localhost:3000/products/" + result._id
//             }
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.get("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .select('name price _id productImage')
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json({
//             product: doc,
//             request: {
//                 type: 'GET',
//                 url: 'http://localhost:3000/products'
//             }
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.patch("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Product.update({ _id: id }, { $set: updateOps })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'Product updated',
//           request: {
//               type: 'GET',
//               url: 'http://localhost:3000/products/' + id
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.delete("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'Product deleted',
//           request: {
//               type: 'POST',
//               url: 'http://localhost:3000/products',
//               body: { name: 'String', price: 'Number' }
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// module.exports = router;