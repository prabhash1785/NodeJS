/**
 * This program will add multiple listener to an event emitter.
 *
 * Created by prrathore on 1/28/15.
 */

var events = require('events');
var EventEmitter = events.EventEmitter;

var util = require('util');

var employeeDB = [];

//function to add multiple employees
//this function will have only one set of events added for any number of calls to this method
//function employeeTool() {
//
//    var self = this;
//    EventEmitter.call(self);
//
//    self.on('added', function() {
//        console.log("New Employee Addded!!");
//    });
//
//    self.on('removed', function() {
//        console.log("Employee Removed!!");
//    });
//
//    self.on('error', function() {
//        console.log("Invalid Operation requested");
//    });
//
//    console.log("Listener count on event added: " + EventEmitter.listenerCount(self, 'added'));
//    console.log("Listener count on event removed: " + EventEmitter.listenerCount(self, 'removed'));
//    console.log("Listener count on event error: " + EventEmitter.listenerCount(self, 'error'));
//
//    return function(operation, employee) {
//        if(operation === 'add') {
//            employeeDB.push(employee);
//            self.emit('added');
//        } else if(operation === 'remove') {
//            employeeDB.pop();
//            self.emit('removed');
//        } else {
//            self.emit('error');
//        }
//    }
//
//}

//function to add employees, this function should have more than one listeners for same event
function employeeTool() {

    var self = this;
    EventEmitter.call(self);

    self.on('added', function() {
        console.log("New Employee Addded!!");
    });

    self.on('removed', function() {
        console.log("Employee Removed!!");
    });

    self.on('error', function() {
        console.log("Invalid Operation requested");
    });

    console.log("Listener count on event added: " + EventEmitter.listenerCount(self, 'added'));
    console.log("Listener count on event removed: " + EventEmitter.listenerCount(self, 'removed'));
    console.log("Listener count on event error: " + EventEmitter.listenerCount(self, 'error'));

    return function(operation, employee) {

        self.on('added', function() {
            console.log("New Employee Addded!!");
        });

        self.on('removed', function() {
            console.log("Employee Removed!!");
        });

        self.on('error', function() {
            console.log("Invalid Operation requested");
        });

        console.log("Listener count on event added: " + EventEmitter.listenerCount(self, 'added'));
        console.log("Listener count on event removed: " + EventEmitter.listenerCount(self, 'removed'));
        console.log("Listener count on event error: " + EventEmitter.listenerCount(self, 'error'));

        if(operation === 'add') {
            employeeDB.push(employee);
            self.emit('added');
        } else if(operation === 'remove') {
            employeeDB.pop();
            self.emit('removed');
        } else {
            self.emit('error');
        }
    };


}

util.inherits(employeeTool, EventEmitter);

var inputs = ['add', 'add', 'add', 'remove', 'xyz'];

//var employeeOperator = new employeeTool();

for(var i = 0; i < inputs.length; i++) {
    //employeeOperator(inputs[i], {id: i, name: "Max_" + i});
    var employeeOperator = new employeeTool()(inputs[i], {id: i, name: "Max_" + i});
}

for(var i = 0; i < employeeDB.length; i++) {
    console.log(i + " : " + JSON.stringify(employeeDB[i]));
}

