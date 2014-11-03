/**
 * Created by Prabhash on 11/1/2014.
 */

var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

/*
 * Event Listener - These can be added using on method or addListener method.
 * Both methods take an event name and handler as arguements.
 *  
 */
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
	console.log("One of the foo barlisteners: " + userName);
});

emitter.on("foobar", function() {
	console.log("Max is a listener");
});

//add listeners using addlistener api
emitter.addListener("test",function() {
	console.log("This is test listener");
});

//add listener which listens to event only once
emitter.once("once", function() {
	console.log("Example of Once Event Listener");
});

console.log("Going to emit an event");
//emitter.emit("test"); //generate an event foo
//emitter.emit("test");

//emitter.emit("once", 1, 2);
emitter.emit("foobar");

//print all the events linked to this emitter
//var listOfListener = emitter.listeners("foobar");
//console.log("List of listeners: " + listOfListener);
//console.log("Function output 1: " + listOfListener[0]);

console.log(EventEmitter.listenerCount(emitter, "foobar"));





