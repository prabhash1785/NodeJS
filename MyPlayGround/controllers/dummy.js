/**
 * Created by prrathore on 4/1/16.
 */

(function dummy() {

    var obj = require('./data');
    console.log("Activity Size: " + obj.items.length);

    var activities = obj.items;

    activities.forEach(function(item) {
        console.log(item.id);
    });
})();
