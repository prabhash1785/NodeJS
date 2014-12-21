/**
 * Test functions defined in SampleExports file.
 *
 * Created by prrathore on 12/20/14.
 */

//Below two require, will load just one object once and not load it again as second time, it will be fetched from cache.
var sampleExports1 = require('./SampleExports');
var sampleExports2 = require('./SampleExports');

//stringified output of sample exports
console.log("SampleExports: " + JSON.stringify(sampleExports1)); //SampleExports: {"b":{"type":"ball","color":"blue"}}
console.log("SampleExports: " + JSON.stringify(sampleExports2)); //SampleExports: {"b":{"type":"ball","color":"blue"}}

var result = sampleExports1 === sampleExports2; //two require on same module, points to same reference
console.log("Is sampleExports1 === sampleExports2: " + result); //true

sampleExports1.h = 'new member'; //this update to object will apply to both sampleExports1 and sampleExports2 objects

//stringified output of sample exports after update to one object
console.log("SampleExports: " + JSON.stringify(sampleExports1)); //SampleExports: {"b":{"type":"ball","color":"blue"},"h":"new member"}
console.log("SampleExports: " + JSON.stringify(sampleExports2)); //SampleExports: {"b":{"type":"ball","color":"blue"},"h":"new member"}

console.log("member call 1: " + JSON.stringify(sampleExports1.a()));
console.log("member call 2: " + JSON.stringify(sampleExports1.b));
console.log("member call 3: " + JSON.stringify(sampleExports1.c()));
console.log("member call 4: " + JSON.stringify(sampleExports1.d()));
console.log("member call 5: " + JSON.stringify(sampleExports1.e));