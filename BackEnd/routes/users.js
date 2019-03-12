var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(users);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
});
module.exports = router;
