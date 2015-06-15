/**
 * A sample function which uses callback to return result.
 *
 * Created by prrathore on 6/15/15.
 */

function addNumbers(param1, param2) {
    console.log('Pre-sum logging');
    setTimeout(sum(param1, param2), 4000);
    console.log('Post sum logging');
}

function sum(a, b) {
    console.log('Sum: ' + (parseInt(a)  + parseInt(b)));
}

addNumbers(20, 40);
