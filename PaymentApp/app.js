'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();
var session = require('cookie-session');

var serveIndex = require('serve-index');

app.use('/exercises', serveIndex(__dirname + '/public/exercises',
    {
      icons: true,
      template: __dirname + '/public/directory.html',

      view: 'details'
    } ));

app.use('/public', express.static(__dirname + '/public'));

app.use('/moneytransfer', serveIndex(__dirname + '/public/MoneyTransfer',
    {
        icons: true,
        template: __dirname + '/public/directory.html',

        view: 'details'
    } ));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'MySecretKey'
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

// Load our initial "user" list in memory
fs.readFile('./user_db.json', function onRead(err, data) {
  if (err) {
    console.log(err);
  }

  app.locals.users = JSON.parse(data);

  require('./routes')(app);

  http.createServer(app).listen(app.get('port'), function onListening() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});