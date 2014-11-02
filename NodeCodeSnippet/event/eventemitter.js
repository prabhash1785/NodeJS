/**
 * Created by Prabhash on 11/1/2014.
 */

var events = require('events');
var emitter = new events.EventEmitter();

//event listener
emitter.on("foo", function() {
    console.log("Hello Foo");
});

emitter.on("bar", function() {
    console.log("Hi bar!!");
});

var listener = function() {
    return function() {
        console.log("Hi! I am a foobar listener");
    };
};

emitter.on("foobar", listener());

emitter.on("foobar", function() {
	var userName = "Amber";
	return function() {
		console.log("Hello " + userName);
	};
});

emitter.on("foobar", function() {
	console.log("Max is a listener");
});

//console.log("Going to emit an event");
//emitter.emit("foobar"); //generate an event foo

//print all the events linked to this emitter
var listOfListener = emitter.listeners("foobar");
console.log("List of listeners: " + listOfListener);
//console.log("Function output 1: " + listOfListener[0]());





