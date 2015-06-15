/**
 * A sample function which uses callback to return result.
 *
 * Created by prrathore on 6/15/15.
 */

'use strict';

function multiply(a, b, callback) {
    if(typeof callback !== 'function') {
        throw new Error('callback function is needed');
    }

    if(a === undefined || b === undefined) {
        return callback('At least one of the numbers are undefined');
    }

    console.log('Going to calculate product of two numbers')
    return callback(null, parseInt(a) * parseInt(b));

}

(function() {
    console.log('Pre-callback..');
    multiply(2, 9, function(error, result) {
        if(error) {
            console.log(error);
            return;
        }

        console.log('Result: ' + result);
    });
    console.log('Post call back log.')
})();


