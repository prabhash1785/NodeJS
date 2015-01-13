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

client.upload('/Users/prrathore/temp/DEVELOPMENT-application.properties', '/x/home/prrathore/temp/application-dev-scp.txt', function() {
    console.log("file moved to server successfully!!");
    client.close();
});

client.on('close', function() {
    console.log("Session closed!!");
})







