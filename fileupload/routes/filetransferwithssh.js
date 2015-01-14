/**
 * Module to transfer from one server to other server using ssh module.
 *
 * Created by prrathore on 1/12/15.
 */

var fs = require('fs');
var ssh2 = require('ssh2');

module.exports = function(options) {

    var conn = new ssh2();

    conn.on(
        'connect',
        function () {
            console.log( "- connected" );
        }
    );

    conn.on(
        'ready',
        function () {
            console.log( "- ready" );

            conn.sftp(
                function (err, sftp) {
                    if ( err ) {
                        console.log( "Error, problem starting SFTP: %s", err );
                        process.exit( 2 );
                    }

                    console.log( "- SFTP started" );

                    // upload file
                    var readStream = fs.createReadStream( "/Users/prrathore/temp/DEVELOPMENT-application.properties" );
                    var writeStream = sftp.createWriteStream( "/x/home/prrathore/temp/application-dev.txt" );

                    // what to do when transfer finishes
                    writeStream.on(
                        'close',
                        function () {
                            console.log( "- file transferred" );
                            sftp.end();
                            process.exit( 0 );
                        }
                    );

                    // initiate transfer of file
                    readStream.pipe( writeStream );
                }
            );
        }
    );

    conn.on(
        'error',
        function (err) {
            console.log( "- connection error: %s", err );
            process.exit( 1 );
        }
    );

    conn.on(
        'end',
        function () {
            process.exit( 0 );
        }
    );

    conn.connect(
        {
            "host": "stage2c6724.qa.paypal.com",
            "port": 22,
            "username": "prrathore",
            //"password":"password!"
            "privateKey": "/Users/prrathore/.ssh/id_rsa"
        }
    );

}