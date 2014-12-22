/**
 * Program to test the difference between exports and module.exports
 *
 * Difference between exports and module.exports:
 *  - exports only export the members of export reference
 *  - exports are returned as objects
 *
 *  - module.exports exports the whole function as function
 *  - since it returns a function, it can be directly invoked as a function.
 *
 *  Note: exports is part of module.exports. Everytime we do a require, we get module.exports containing exports as members.
 *
 *  Also read this:
 *  If you want the root of your module's export to be a function (such as a constructor) or if you want to export a
 *  complete object in one assignment instead of building it one property at a time, assign it to module.exports instead
 *  of exports
 *
 * Created by prrathore on 12/20/14.
 */

'use strict';

console.log("Loading this module..."); //to track the loading of this module

//this will take current exports object and append these function values to existing objects in exports object
exports.a = function() {
    this.name = 'Sam';
    this.age = 30

    return this;
}

//this assigns the properties to exports object
exports.b = {
    type : 'ball',
    color : 'blue'
};

exports.e = {
    weight : 10
}

var volume = function() {
    return {
        length : 4,
        breadth : 6,
        depth : 8
    }
};

exports.c = volume;

exports.d = function() {
    return {
        day : 'Saturday',
        month : 'December'
    }
}

//print exports and module.exports
console.log("exports: " + JSON.stringify(exports));
console.log("module.exports: " + JSON.stringify(module.exports));

var flag = exports === module.exports;
console.log("Is exports === module.exports: " + flag);
