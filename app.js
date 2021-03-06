﻿var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var vash = require('vash');
var config = require('./config.js');
var viewhelper = require('./lib/viewhelper.js');

// routes
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin-page');

var cookieSession = require('cookie-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

viewhelper(vash);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
	keys : [config.appSecret1, config.appSecret2]
}));
app.use(function(req, res, next) {
	vash.helpers.session = req.session;
	process.stdout.write("Attach session \n");
	next();
});

// routes config
app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

process.stdout.write(`NODE_ENV = ${process.env.NODE_ENV}\n`);

module.exports = app;
