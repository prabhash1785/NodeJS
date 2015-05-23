/**
 * Created by prrathore on 5/22/15.
 */

'use strict';

var timethat = require('timethat');

var startTime = new Date('1/1/2010 3:00:00');
var endTime = new Date('1/1/2010 5:43:21');

console.log(timethat.calc(startTime, endTime));

