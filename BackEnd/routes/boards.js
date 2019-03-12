var express = require('express');
var router = express.Router();
var Board = require('../models/board')
router.post('/', function(req, res){
  console.log(req.body);
  var board = new Board();
  board.title = req.body.title;
  board.writer = req.body.writer;
  board.content = req.body.content;
  board.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
        return;
    }
    res.json({result: board});
  });
});

router.get('/', function(req,res){
  Board.find(function(err, boards){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(boards);
  })
});

router.get('/:id', function(req, res, next) {
  Board.findById(req.params.id, function(err, board) {
    if(err) {
      return next(err);
    }
  });
});

router.put('/', function(req, res) {
  Board.update(
    {_id: req.body._id},
    { $set: {'title': req.body.title, 'content' : req.body.content}}, 
    function(err, result) {
      if(err)  return res.status(500).send({error: 'database failure'});
      res.json({result:1});
    }
  );
}); 

router.delete('/:id', function(req, res){
  
  Board.remove({ _id: req.params.id }, function(err, output){
    if(err) return res.status(500).json({ error: "database failure" });
    res.json({result: 1});
  })
});

module.exports = router;
