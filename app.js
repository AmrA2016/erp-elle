var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


var newsRouter = require('./routes/news');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/api/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
