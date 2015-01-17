/**
 * sampleModule module will listen to events emitted by SampleModule and run the call backs.
 *
 * Created by prrathore on 1/16/15.
 */

var SampleModule = require('./SampleModule');

sampleModule = new SampleModule({length : 50, breadth : 100});

sampleModule.on('undefined', function() {
    console.log("not an object");
    throw "not an object";
})

sampleModule.on('notobject', function() {
    console.log("undefined object");
    throw "undefined options object";
})

sampleModule.on('invalidparams', function() {
    console.log("invalid params");
    throw "Invalid parameters!!";
})

sampleModule.on('area', function() {
    console.log("Area calculated: " + area);
    return 'area';
})


