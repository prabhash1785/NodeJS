'use strict';

var http = require('http');
var express = require('express');
var kraken = require('kraken-js');

//var multer = require('multer');

var options, app, server;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));

//app.use(multer({
//    dest: '/Users/prrathore/temp/cardfileuploads',
//    limits: {
//        fieldNameSize: 500,
//        files: 2,
//        fields: 5
//    },
//    rename: function (fieldname, filename) {
//        return fieldname + filename + Date.now();
//    },
//    onFileUploadStart: function (file) {
//        console.log('Upload starting for filename: ' + file.originalname);
//    },
//    onFileUploadData: function (file, data) {
//        console.log(data.length + ' of ' + file.fieldname + ' arrived')
//    },
//    onParseStart: function () {
//        console.log('Form parsing started at: ', new Date())
//    },
//    onParseEnd: function (req, next) {
//        console.log('Form parsing completed at: ', new Date());
//
//        // usage example: custom body parse
//        //req.body = require('qs').parse(req.body);
//
//        // call the next middleware
//        next();
//    },
//    onFileUploadComplete: function (file) {
//        console.log(file.fieldname + ' uploaded to  ' + file.path);
//    },
//    onFileSizeLimit: function (file) {
//        console.log('Failed: ', file.originalname)
//        fs.unlink('./' + file.path) // delete the partially written file
//    },
//    onFilesLimit: function () {
//        console.log('Crossed file limit!')
//    },
//    onFieldsLimit: function () {
//        console.log('Crossed fields limit!')
//    },
//    onPartsLimit: function () {
//        console.log('Crossed parts limit!')
//    },
//    onError: function(error, next) {
//        console.log("Error occurred while uploading the file!!");
//        next(error);
//    }
//}));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});



/*
 * Create and start HTTP server.
 */
if (!module.parent) {

    /*
     * This is only done when this module is run directly, e.g. `node .` to allow for the
     * application to be used in tests without binding to a port or file descriptor.
     */
    server = http.createServer(app);
    server.listen(process.env.PORT || 8000);
    server.on('listening', function () {
        console.log('Server listening on http://localhost:%d', this.address().port);
    });

}