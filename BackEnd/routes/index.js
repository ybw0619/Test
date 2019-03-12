var express = require('express');
var router = express.Router();

var User = require('../models/user');

var path = require('path'); // 추가

var passport = require('passport')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.sendFile(path.join(__dirname, '../public', 'index.html'))
});
//로그인
router.post('/api/signin', passport.authenticate('local',{
    failureRedirect: '/api/signin/failure', //root부터의 경로를 전부 작성해야함
    successRedirect: '/api/signin/success', //root부터의 경로를 전부 작성해야함
  })
);
//로그인 실패
router.get('/api/signin/failure', function(req, res, next) {
  res.json({result:0,msg:'signin failure'})
});
//로그인 성공
router.get('/api/signin/success', function(req, res, next) {
  res.json({result:1,msg:'signin success'})
});
//로그아웃
router.get('/api/signout', function (req, res) {
  req.logout();
  res.json({result: 1, msg: 'signout success'});
});
//회원가입
router.post('/api/signup', function(req, res, next) {
  User.findOne({id:req.body.username},(err,user)=>{
    if(err) return next(err);
    if(user){
      return res.json({result:0,msg:"사용자가 이미 있습니다."});
    }
    else{
      const user = new User();
      user.id = req.body.username;
      user.pw = req.body.password;
      user.name = req.body.name;
      user.save(function(err){
        if(err){
          console.error(err);
          res.json({result: 0, msg: '에러'});
          return;
        }
        res.json({result: 1, msg: '성공'});
      });
    }
  })
});

module.exports = router;
