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

router.post('/upload', function (req, res) {

    console.log("File Uploaded!!");

    res.render('datauploadform', {status : 'File uploaded!!'});

});

module.exports = router;
