/**
 * Created by prrathore on 1/13/15.
 */

var client = require('scp2');
var fs = require('fs');

//client = new Client();

client.defaults({
    port: 22,
    host: 'stage2c6724.qa.paypal.com',
    username: 'prrathore',
    privateKey: fs.readFileSync('/Users/prrathore/.ssh/id_rsa')
});

client.upload('/Users/prrathore/temp/DEVELOPMENT-application.properties', '/x/home/prrathore/temp/application-dev-scp.txt', function(err) {

    if(err) {
        console.log("File uoload failed: " + err);
        client.close();
    }

    console.log("file moved to server successfully!!");
    client.close();
});

client.on('connect', function() {
    console.log("Connected!!");
});

client.on('ready', function() {
    console.log("Ready for file transfer!!");
});

client.on('error', function() {
    console.log("Some error occurred!!");
});

client.on('end', function() {
    console.log("Socket connection closed/ended!!");
});

client.on('mkdir', function(dir) {
    console.log("Directory created: " + dir);
});

//No need to print this callback as it has very verbose output when we print buffer
//client.on('transfer', function(buffer, uploaded, total) {
//    console.log("Transferred: " + buffer + " : " + uploaded + " : " + total);
//});

client.on('close', function() {
    console.log("Session closed!!");
});







