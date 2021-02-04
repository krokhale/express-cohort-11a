var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/users/2/john/doe', function(req, res, next) {
//
// });
//
// router.get('/users/3/jane/doe', function(req, res, next) {
//
// });

// RESTFUL API + Working with DB in nodejs

router.post('/form-submission', function(req, res, next) {
  console.log(req.body)
  res.json({success: true});
});

router.get('/:id/:firstName/:lastName', function(req, res, next) {
  console.log(req.params)
  // lookup info about user id  = req.params.id from the DB and send back a response
  res.json({success: true, amount: 100});
});

router.get('/john', function(req, res, next) {
  // console.log(req)
  // query params
  console.log(req.query)
  // DB call and find info for person with id =2

  // params
  console.log(req.params)

  // request body or form submission
  console.log(req.body)
  // res.send('respond with john');
  // look up information in the DB and respond with json data like below

  res.json({firstName: 'John'});
  // setTimeout(() => {
  // }, 5000)

});

module.exports = router;
