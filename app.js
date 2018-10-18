var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var  mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var Record = require('./models/Record');

var io = require('socket.io').listen(app.listen(3000));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dasboard',{ useNewUrlParser: true });

io.sockets.on('connection', function (socket) {
  console.log('client connect');
  socket.on('echo', function (data) {
  io.sockets.emit('message', data);
});
});

require('./routes/index')(app,io);

console.log("Server listening at port 3000");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


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

module.exports = app;
