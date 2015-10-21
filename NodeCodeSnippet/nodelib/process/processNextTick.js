/**
 * Process next tick api demo
 *
 * Created by prrathore on 10/21/15.
 */

/**
 * Example of a bad asynchronous function
 *
 * @param input
 * @param callback
 */
function notTrulyAsyncFunction(input, callback) {

    if(input) {
        console.log('input is true');
        callback(); // this is not really an asynchronous call, it's more of a synchronous call
        return;
    }

    console.log('input is false');
    callback();

}

/**
 * A true asynchronous function using process.nextTick()
 *
 * @param input
 * @param callback
 */
function asyncFunctionWithProcessNextTick(input, callback) {

    if(input) {
        console.log('input is true');
        process.nextTick(callback);
        return;
    }

    console.log('input is false');
    process.nextTick(callback);


}

/**
 * Prints following (Not the way expected as it's not truly async):
 *  input is true
    async just called me!
    I am a random function!!
    I am foo-bar
 */
//notTrulyAsyncFunction(true, function() {
//    console.log('async just called me!');
//    randomFunction();
//});

/**
 * Output as expected:
 *  input is true
    I am foo-bar
    async just called me!
    I am a random function!!
 *
 */
asyncFunctionWithProcessNextTick(true, function() {
    console.log('async just called me!')
    randomFunction();
});

(function foobar() {
    console.log('I am foo-bar');
})();

function randomFunction() {
    console.log('I am a random function!!');
}
