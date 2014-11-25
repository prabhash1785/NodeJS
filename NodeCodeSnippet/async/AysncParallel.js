/**
 * Sample function which shows the usage of Async's Parallel API.
 *
 * Created by prrathore on 11/25/14.
 */

var async = require('async');

async.parallel([
        function(callback){
            setTimeout(function(){
                callback('error1', 'one');
            }, 200);
        },
        function(callback){
            setTimeout(function(){
                callback(null, 'two');
            }, 100);
        }
    ],
    // optional callback
    function(err, results){
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
        if(results) {
            console.log("Results: " + results);
        }

        if(err) {
            console.log("Error: " + err);
        }
    });

