/**
 * Sample of Prototypal Inheitance
 * 
 * @author Prabhash Rathore
 * 
 */

"use strict";

var events = require('events');
var EventEmitter = events.EventEmitter;
var fs = require('fs');
var util = require('util');

function fileReader(fileName) {
	var _self = this;
	
	EventEmitter.call(_self);
	
	_self.on("stats", function() {
	    fs.stat(fileName, function(error, stats) {
	      if (!error && stats.isFile()) {
	        _self.emit("read");
	      }
	    });
	  });

	  _self.on("read", function() {
	    fs.readFile(fileName, "utf8", function(error, data) {
	      if (!error && data) {
	        console.log(data);
	      }
	    });
	  });

	  fs.exists(fileName, function(exists) {
	    if (exists) {
	      _self.emit("stats");
	    } else {
	    	util.error("This file doesn't exist: " + fileName);
	    }
	  });
}
	
	
util.inherits(fileReader,EventEmitter);

var reader = new fileReader("../resources/foo.txt");

