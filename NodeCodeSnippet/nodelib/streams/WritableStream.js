/**
 * Created by prrathore on 1/6/15.
 */

/**
 * Output is printed as:
 * foo
 success = true
 Data was successfully written!

 */
var success = process.stdout.write("foo\n", function() {
    console.log("Data was successfully written!");
});
console.log("success = " + success);
