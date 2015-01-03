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

//check if a given path is a file or directory
var path1 = '../CommandLine.js';
fs.stat(path1, function(error, stats) {
    if (error) {
        console.error("stat error:  " + error.message);
    } else {
        console.log("stats: " + JSON.stringify(stats, null, 4));
        console.log("Is File: " + stats.isFile());
        console.log("Is Directory: " + stats.isDirectory());
    }
});

//watch for file changes
fs.watch(path1, {
    persistent: true
}, function(event, filename) {
    console.log("event is: " + event);
    console.log("Filename for which event was generated: " + filename);
    if (event === "rename") {
        console.log("The file was renamed/deleted.");
    } else if (event === "change") {
        console.log("The file was changed.");
    }
});

