/**
 * Sample function to prove that Arrays.push() copies object by reference.
 *
 * Created by Prabhash Rathore on 11/24/14.
 */

var arr = [];

var destObj = {
    a : String,
    b : String
};

var obj1 = {
    a : "Amber",
    b : "Max"
};

var obj2 = {
    a : "Ricky",
    b : "Rathore"
};

var obj3 = {
    a : "Prabhash",
    b : "Singh"
};

var srcArr = [obj1, obj2, obj3];

for(var i = 0; i < srcArr.length; i++) {

    console.log("Source Object at index " + i + " is: " + JSON.stringify(srcArr[i]));

    /**
     * Type 1:
     * assigning the whole object assigns a different reference resulting in having different references pushed to array,
     * hence not overwriting array elements on Arrays.PUSH
     *
     */
    //destObj = srcArr[i];

    /**
     * Type 2:
     * Copying member elements doesn't change the reference address, so it results in overwriting the objects when this same object is pushed to array
     * multiple times because Array.push in Javascript copies objects by reference.
     *
     */
    //destObj.a = srcArr[i].a;
    //destObj.b = srcArr[i].b;

    /**
     * Type 3:
     * To prevent overwriting of objects, create new objects everytime by using new operator
     */
    destObj = new Object();
    destObj.a = srcArr[i].a;
    destObj.b = srcArr[i].b;

    console.log("Destination Object: " + JSON.stringify(destObj));

    arr.push(destObj);
}

console.log("Here is the array after copying objects: " + JSON.stringify(arr));

