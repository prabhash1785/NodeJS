/**
 * Sample Timer and Interval functions
 * 
 * Timer and Interval functions are available as globals in Node so no need to import these as modules.
 *
 */

"use strict";

var timerID = setTimeout(function(name) {
	console.log("This is a timer function, will execute after given time: " + name);
},3000, "Max");

//clearTimeout(timerID);

var intervalID = setInterval(function() {
	console.log("This will execute every 2 seconds!!");
},2000);

clearInterval(intervalID);




