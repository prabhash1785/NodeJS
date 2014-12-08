/**
 * Created by prrathore on 12/7/14.
 */

var person = {
    firstName : 'Foo',
    lastName : 'Bar',
    toString : function() { //Override toString method
        return this.firstName + " " + this.lastName;
    }
}

var a = Object.create(person);

var b = Object.create(a);

var c = Object.create(b);

console.log("Print all linked prototype objects: ");

var temp = Object.getPrototypeOf(person);
console.log("temp: " + temp);