/**
 * Program to show the usage of command line arguements of Node.
 *
 * Created by prrathore on 1/1/15.
 */

'use strict';

process.argv.forEach(function(val, index) {
    console.log(index + " : " + val);
});
