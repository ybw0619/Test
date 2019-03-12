const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

module.exports = () => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    console.log("passport.serializeUser");
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    console.log("passport.deserializeUser");
    done(null, user); // 여기의 user가 req.user가 됨
  });

  passport.use(new LocalStrategy((id, pw, done) => {
    User.findOne({ id : id },(findError,user) => {
      if (findError) return done(findError); // 서버 에러 처리
      if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' });
      else{
        if(user.pw==pw) return done(null,user)
        else return done(null, false, { message: '비밀번호가 틀렸습니다' });
      }
    });
  }));
};
