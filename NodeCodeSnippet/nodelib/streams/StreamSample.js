/**
 * Sample program to use Stream APIs.
 *
 * Created by prrathore on 1/6/15.
 */

var Stream = require('stream');
var stream = new Stream();
var duration = 5 * 1000; // 5 seconds
var end = Date.now() + duration;
var interval;

stream.readable = true;
interval = setInterval(function() {
    var now = Date.now();

    console.log("Emitting a data event");
    stream.emit("data", new Buffer("foo"));

    if (now >= end) {
        console.log("Emitting an end event");
        stream.emit("end");
        clearInterval(interval);
    }
}, 1000);




