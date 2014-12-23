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

var function1 = function() {
    console.log("function1");
    return 'function1';
}

var function2 = function() {
    console.log("function2");
    return 'function2';
}

var object1 = {
    o1 : 'obj1',
    o2 : 'obj2'
};

var object2 = {
    l1 : 'l1',
    l2 : 'l2'
};

exports.one = {
    one : 'one'
};

//multiple functions and objects can be linked to module.exports as follows
module.exports = {
    function1: function1,
    function2 : function2,
    object1 : object1,
    object2 : object2
};

console.log("exports: " + JSON.stringify(exports));
console.log("module.exports: " + JSON.stringify(module.exports));
