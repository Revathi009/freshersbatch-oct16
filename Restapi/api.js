const express = require ('express');
const router = express.Router();
const Fruit = require('../models/fruits');

//get a list of fruits from the db
router.get('/inventory', function(req,res,next){
    res.send({type:'GET'});
});

router.get('/inventory/:name', function(req,res,next){
    Fruit.findOne({name: req.params.name}).then(function(fruit){
        res.send({fruit});
    });
});

router.post('/inventory', function(req,res,next){
    Fruit.create(req.body).then(function(fruit){
        res.send(fruit);
    }).catch(next);
});

router.put('/inventory', function(req,res,next){
    Fruit.updateMany(req.body).then(function(fruit){
        res.send({fruit});
    });
});

router.put('/inventory/:name', function(req,res,next){
    Fruit.updateOne({name: req.params.name}).then(function(fruit){
        res.send({fruit});
    });
});

router.delete('/inventory', function(req,res,next){
    Fruit.remove(req.body).then(function(fruit){
    res.send(fruit);
    });
});

router.delete('/inventory/:name', function(req,res,next){
    Fruit.findOneAndRemove({name: req.params.name}).then(function(fruit){
        res.send(fruit);
    });

});

module.exports = router;