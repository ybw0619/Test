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
  board.findById(req.params.id, function(err, board) {
    if(err) {
      return next(err);
    }
    res.json(board);
  });
});

router.delete('/api/boards/:board_id', function(req, res){
    board.remove({ _id: req.params.board_id }, function(err, output){
        if(err) return res.status(500).json({ error: "database failure" });

        /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
        if(!output.result.n) return res.status(404).json({ error: "board not found" });
        res.json({ message: "board deleted" });
        */

        res.status(204).end();
    })
});

module.exports = router;
