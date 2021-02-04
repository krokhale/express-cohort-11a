var express = require('express');
var router = express.Router();
const {Dog} = require('../lib/models');

// CREATE A RESTful API for the DOG model/entity

// CRUD - Create, Read, Update, Delete

// POST /dogs
// GET /dogs/2
// PUT /dogs/3
// DELETE /dogs/4

router.post('/', async function(req, res, next) {
    console.log(req.body);
    var dog = await Dog.create(req.body);
    Dog.create()
    // let dog = await Dog.create({firstName: req.body.firstName, lastName: req.body.lastName});
    console.log(dog)
    res.json(dog);
});

router.get('/:id', async function(req, res, next) {
    console.log(req.params);
    // let dog = await Dog.create(req.body);
    // let dog = await Dog.create({firstName: req.body.firstName, lastName: req.body.lastName});
    // console.log(dog)
    res.json({});
});

// router.get('/', function(req, res, next) {
//     res.send('respond with a dog');
// });


module.exports = router;
