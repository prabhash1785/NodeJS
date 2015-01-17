/**
 * This is a sample file program which will be exposed as Node module and emit certain events.
 *
 * Created by prrathore on 1/13/15.
 */

'use strict';

var events = require('events');
var EventEmitter = events.EventEmitter;
var util = require('util');

function calculateArea(options) {

    var self = this;

    EventEmitter.call(self);

//    this.on('undefined', function() {
//        console.log("not an object");
//        throw "not an object";
//    })
//
//    this.on('notobject', function() {
//        console.log("undefined object");
//        throw "undefined options object";
//    })
//
//    this.on('invalidparams', function() {
//        console.log("invalid params");
//        throw "Invalid parameters!!";
//    })
//
//    this.on('area', function() {
//        console.log("Area calculated: " + area);
//        return area;
//    })

    if(options === undefined) {
       this.emit('undefined');
    }

    if(typeof options !== 'object') {
        this.emit('notobject');
    }

    if(options.length === undefined || options.breadth === undefined) {
        this.emit('invalidparams');
    }



    var area = options.length * options.breadth;
    this.emit('area');

}

util.inherits(calculateArea, EventEmitter);

var area = new calculateArea({length : 5, breadth : 10});

module.exports = calculateArea;
