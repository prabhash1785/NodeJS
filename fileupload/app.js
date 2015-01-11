var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dust = require('dustjs-linkedin');
var cons = require('consolidate');

var multer = require('multer');

//var dustjs = require('adaro');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('template_engine', 'dust');

//app.engine('dust', dustjs.dust({ ... });
//app.set('view engine', 'dust');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({
    dest: '/Users/prrathore/temp/cardfileuploads',
    limits: {
        fieldNameSize: 500,
        files: 2,
        fields: 5
    },
    rename: function (fieldname, filename) {
        return fieldname + filename + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log('Upload starting for filename: ' + file.originalname);
    },
    onFileUploadData: function (file, data) {
        console.log(data.length + ' of ' + file.fieldname + ' arrived')
    },
    onParseStart: function () {
        console.log('Form parsing started at: ', new Date())
    },
    onParseEnd: function (req, next) {
        console.log('Form parsing completed at: ', new Date());

        // usage example: custom body parse
        //req.body = require('qs').parse(req.body);

        // call the next middleware
        next();
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    },
    onFileSizeLimit: function (file) {
        console.log('Failed: ', file.originalname)
        fs.unlink('./' + file.path) // delete the partially written file
    },
    onFilesLimit: function () {
        console.log('Crossed file limit!')
    },
    onFieldsLimit: function () {
        console.log('Crossed fields limit!')
    },
    onPartsLimit: function () {
        console.log('Crossed parts limit!')
    },
    onError: function(error, next) {
        console.log("Error occurred while uploading the file!!");
        next(error);
    }
}));


app.use('/', routes);
app.use('/users', users);



// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


module.exports = app;
