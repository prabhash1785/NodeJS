/**
 * Program to play around with Node file APIs.
 *
 * Created by prrathore on 1/20/15.
 */

var fs = require('fs');
var path = require('path');

var dirName = __dirname + path.sep + 'temp';

//create directory asynchronously
fs.mkdir(dirName, function() {
    console.log("Directory is created!!");
});

var fileName = dirName + path.sep + 'test.txt';

//create file asynchronously, no need to close file in this case as it's automatically closed by writeFile API
fs.writeFile(fileName, 'Playing with Node FS APIs', {encoding: 'utf8', mode: 438, flag: 'w'}, function(err) {
    if(err) {
        throw err;
    }
    console.log("File is created!!");
});