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
 * Created by prrathore on 12/20/14.
 */

'use strict';

exports.a = function() {
    this.name = 'Sam';
    this.age = 30

    return this;
}

exports.b = {
    type : 'ball',
    color : 'blue'
};

var volume = function() {
    return {
        length : 4,
        breadth : 6,
        depth : 8
    }
};

exports.c = volume;
