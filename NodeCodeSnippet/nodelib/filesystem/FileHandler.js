/**
 * Program to play around with Node file APIs.
 *
 * Created by prrathore on 1/20/15.
 */

var fs = require('fs');
var path = require('path');

var dirName = __dirname + path.sep + 'temp';

fs.mkdir(dirName, function() {
    console.log("Directory is created!!");
})

var fileName = dirName + path.sep + 'test.txt';

fs.writeFile(fileName, 'Playing with Node FS APIs', {encoding: 'utf8', mode: 438, flag: 'w'}, function(err) {
    if(err) {
        throw err;
    }
    console.log("File is created!!");
})