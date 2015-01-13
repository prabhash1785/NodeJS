var express = require('express');
var router = express.Router();

var fs = require('fs');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('datauploadform', { title: 'Upload File' });
});

router.post('/uploadwithmulter', function (req, res) {

    console.log("File Uploaded");

    var body = req.body;
    console.log("File attributes: " + JSON.stringify(body));

    var files = req.files;
    console.log("Files: " + JSON.stringify(files));


    res.render('datauploadform', {status : 'File uploaded!!'});

});

router.post('/uploadwithssh', function (req, res) {

    var file = req.files.file.path;
    console.log("Going to move this file to remote server using ssh2: " + file);

    var fileTransfer = require('./filetransferwithssh')();


    res.render('datauploadform', {status : 'File uploaded!!'});

});

router.post('/uploadwithsftp', function (req, res) {

    var file = req.files.file.path;
    console.log("Going to move this file to remote server using sftp: " + file);

    var fileTransfer = require('./filetransferwithsftp')();


    res.render('datauploadform', {status : 'File uploaded!!'});

});

module.exports = router;
