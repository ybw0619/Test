var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movies = require('./routes/movies');
var books = require('./routes/books');
var boards = require('./routes/boards');

var app = express();

var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportConfig = require('./passport'); // 여기

var flash    = require('connect-flash');
var session = require('express-session'); // 세션 설정



// app.use(require('connect-history-api-fallback')()); // vue router와 연동을 위한 모듈 추가


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: '비밀코드', resave: true, saveUninitialized: false })); // 세션 활성화
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passportConfig()

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/movies', isAuthenticated, movies);
app.use('/api/books', books);
app.use('/api/boards', boards);

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial',{ useNewUrlParser: true });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { // 현재 session이 유효한 세션인가?
        // 유효 하므로 다음으로
        return next();
    }
    // 유효하지 않은 경우
    res.status(401);
    res.json({});
}

module.exports = app;
