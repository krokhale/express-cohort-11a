var express = require('express');
var router = express.Router();
const {Dog} = require('../lib/models');

// CREATE A RESTful API for the DOG model/entity
// Users
// Cars

// CRUD - Create, Read, Update, Delete

// POST /dogs - Create
// GET /dogs/2 - Fetching/reading
// PUT /dogs/3 - Updating the dog with id = 2
// DELETE /dogs/7 - Delete the dog with id = 4

router.delete('/:id', async function(req, res, next) {
    console.log(req.params)
    // ask the DB to delete the record with id = req.params.id
    let dog = await Dog.destroy({where: {id: req.params.id}});

    res.json({});
});

router.get('/', async function(req, res, next) {
    console.log('GET request for all dogs in the system received')
    let dogs = await Dog.findAll({});
    // let dog = await Dog.create(req.body);
    // let dog = await Dog.create({firstName: req.body.firstName, lastName: req.body.lastName});
    // console.log(dog)
    res.json(dogs);
});

router.post('/', async function(req, res, next) {
    console.log(req.body);
    // next up is savind the info in the DB and sending back a response to the react server.
    let dog = await Dog.create(req.body);


    // let dog = await Dog.create({firstName: req.body.firstName, lastName: req.body.lastName});
    // console.log(dog)
    // res.json({});
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
