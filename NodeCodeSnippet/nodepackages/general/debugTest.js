/**
 * Created by prrathore on 9/15/15.
 */

'use strict';

/**
 * To print the debug statement in this program, run this program with Debug environment variable as follows:
 *  NODE_DEBUG=hello node debug debugTest.js
 *
 */

//var debug = require('util').debuglog('test'); //this is only available with Node version 0.12

var debug = require('debuglog')('hello');

debug('This is a debug statement'); //this line will be only printed when NODE_DEBUG=hello is set as Environment variable

console.log('This is a console statement');