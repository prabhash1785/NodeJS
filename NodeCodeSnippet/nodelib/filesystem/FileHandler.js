/**
 * Program to play around with Node file APIs.
 *
 * Created by prrathore on 1/20/15.
 */

var fs = require('fs');
var path = require('path');

fs.mkdir(__dirname + path.sep + 'temp', function() {
    console.log("Directory is created!!");
})
