/**
 * This file has multiple examples on how to create new objects on Javascript.
 *
 * Created by prrathore on 11/25/14.
 */

function Person(id, name, age) {
    this.id = id,
    this.name = name,
    this.age = age
}

var a = Person instanceof Function;
var b = Person instanceof Object;

console.log("is Person instance of Function: " + a); //is Person instance of Function object

console.log("is Person instance of Object: " + b);
