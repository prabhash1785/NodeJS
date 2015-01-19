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

//    self.on('undefined', function() {
//        console.log("not an object");
//        throw "not an object";
//    })
//
//    self.on('notobject', function() {
//        console.log("undefined object");
//        throw "undefined options object";
//    })
//
//    self.on('invalidparams', function() {
//        console.log("invalid params");
//        throw "Invalid parameters!!";
//    })
//
//    self.on('area', function(area) {
//        console.log("Area calculated: " + area);
//        return area;
//    })

    if(options === undefined) {
        self.emit('undefined');
    }

    if(typeof options !== 'object') {
        self.emit('notobject');
    }

    if(options.length === undefined || options.breadth === undefined) {
        self.emit('invalidparams');
    }

    this.area = function() {
        var area = options.length * options.breadth;
        self.emit('area', area);
    }

}

util.inherits(calculateArea, EventEmitter);

//var area = new calculateArea({length : 5, breadth : 10});
//area.area();
module.exports = calculateArea;
