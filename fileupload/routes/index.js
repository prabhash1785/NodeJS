var express = require('express');
var router = express.Router();

var fs = require('fs');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('datauploadform', { title: 'Upload File' });
  //res.sendFile('/Users/prrathore/MyGitRepo/NodeJS/fileupload/views/index.html');
});

//router.post("/upload", function(req, res, next){
//    if (req.files) {
//        console.log(util.inspect(req.files));
//        if (req.files.myFile.size === 0) {
//            return next(new Error("Hey, first would you select a file?"));
//        }
//        fs.exists(req.files.myFile.path, function(exists) {
//            if(exists) {
//                res.end("Got your file!");
//            } else {
//                res.end("Well, there is no magic for those who don’t believe in it!");
//            }
//        });
//    }
//});

router.post('/upload', function (req, res) {

    console.log("File Uploaded");

    //model.status = "File Uploaded!!";

    var body = req.body;
    console.log("File attributes: " + JSON.stringify(body));

    var files = req.files;
    console.log("Files: " + JSON.stringify(files));


    res.render('datauploadform', {status : 'File uploaded!!'});

});

module.exports = router;
