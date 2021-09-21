const express = require('express');
var router = express.Router();
const cors = require('cors');
const multer = require('multer');
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('./productModel');  //to fetch model

const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'images');
    },
    filename: function(req, file, cb) {
      const mimeType = file.mimetype.split('/');
    const fileType = mimeType[1];
    const fileName = file.originalname + '.' + fileType;
      cb(null, new Date().toISOString() + fileName);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
  };
  
  const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single(
    'image'
  );
  

router.get('/products', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving products :' + JSON.stringify(err, undefined, 2)); }
    });
});

//by id
router.get('/products/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.post('/products', (req, res) => {

  const imagePath = 'http://localhost:000/api/products' + req.file.filename;
    var prod = new Product({            //object created
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/products/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prod = {
        name: req.body.name,
        image: req.file.path,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    };
    Product.findByIdAndUpdate(req.params.id, { $set: prod }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

//delete

router.delete('/products/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;