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

var c = new Person(1, 'Ricky', '29');
console.log("Value of c: " + JSON.stringify(c));

var d = Object.create(Person.prototype);
console.log("Value of d: " + d);

console.log("Prototype of Person: " + JSON.stringify(Person.prototype));

console.log("Values associated with Person object: ");
for(var i in c) {
    console.log("i = " + i );
}