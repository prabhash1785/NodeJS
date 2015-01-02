/**
 * Program to show the usage of command line arguements of Node.
 *
 * Created by prrathore on 1/1/15.
 */

'use strict';

process.argv.forEach(function(val, index) {
    console.log(index + " : " + val);
});

var typeOfArgv = Array.isArray(process.argv);
console.log("Is process.argv an Array: " + typeOfArgv); //true

//use commander module
var commander = require('commander');

commander
    .option("-f, --foo <i>", "Integer value for foo", parseInt, 15)
    .option("-b, --bar [j]", "Integer value for bar", parseInt, 10)
    .option("-z, --baz", "Boolean argument baz")
    .parse(process.argv);

console.log(commander.foo); //15
console.log(commander.bar); //10
console.log(commander.baz); //undefined

//use of util module
var util = require('util');
util.log("Node is Awesome!!"); //util.log adds a timestamp to log statements

//use of tty interface to check if streams are associated with terminal window
//run from command line to see boolean values otherwise it will show undefined
console.warn("stdin  = " + process.stdin.isTTY);
console.warn("stdout = " + process.stdout.isTTY);
console.warn("stderr = " + process.stderr.isTTY);



