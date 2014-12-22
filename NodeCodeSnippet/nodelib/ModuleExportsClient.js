/**
 * Client code to use module.exports finctions.
 *
 * Created by prrathore on 12/21/14.
 */

var m = require('./ModuleExports');

console.log("value of m: " + JSON.stringify(m));
//console.log("m(): " + m()); //results in exception as module.exports has an object not a function


console.log("function1: " + m.function1());
console.log("function2: " + m.function2);