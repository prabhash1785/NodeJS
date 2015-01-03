/**
 * Node program to acess the file system on a computer.
 *
 * Created by prrathore on 1/3/15.
 */

//find absolute path of current executing file
console.log("This file is in: " + __filename);
console.log("This file is in directory: " + __dirname);

console.log('Current directory: ' + process.cwd());

//path module
var path = require('path');

var dir = ['delhi', 'bangalore', 'chicago'];
var fullPath = dir.join(path.sep);
console.log("Full Directory Path: " + fullPath);


//fs module
var fs = require('fs');

//synchronous file check
var fileName = '../CommandLine.js';
var fileExists = fs.existsSync(fileName);
console.log("File Exist check synchronously: " + fileExists);

//asynchronous file check
fs.exists(fileName, function(exists) {
    if(exists) {
        console.log("File exists!!");
    } else {
        console.log("File doesn't exist");
    }
});
console.log("Asynchronously checking if file exists!!");

