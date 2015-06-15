/**
 * Created by prrathore on 6/15/15.
 */

'use strict';

function addNumbers(param1, param2) {
    console.log('Pre-sum logging');

    var timerID = setTimeout(sum, 4000, param1, param2);

    console.log('Post sum logging');

}

function sum(a, b) {
    console.log('Sum: ' + (parseInt(a)  + parseInt(b)));
}

addNumbers(20, 40);

