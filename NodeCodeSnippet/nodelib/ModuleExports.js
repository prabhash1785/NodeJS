/**
 * Sample code to show the usage of module.exports
 *
 * Created by prrathore on 12/21/14.
 */

//module.exports value is overwritten if we reassign functions more than once with the last value.
module.exports = function() {
    console.log("exports 1..");
    return 1;
}

module.exports = function() {
    console.log("exports 2..");
    return 2;
}

//in case of module.exports, assigned objects gets overwritten with the next function unlike exports object
module.exports = {
    a : 'a',
    b: 'b',
    f: function() {
        console.log("this is an object");
    }
};

module.exports = function() {
    console.log("exports 3..");
    return 3;
}
