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

