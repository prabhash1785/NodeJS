/**
 * Reading a File Using fs.createReadStream()
 *
 * Created by prrathore on 1/6/15.
 */

var fs = require("fs");
var stream;

stream = fs.createReadStream(__dirname + "/StreamSample.js");

stream.on("data", function(data) {
    var chunk = data.toString();

    process.stdout.write(chunk);
});

stream.on("end", function() {
    console.log();
});
