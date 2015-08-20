/**
 * Check connection between your local host and a remote machine. This could be used to detect firewall rules between two
 * machines.
 *
 * Created by prrathore on 8/20/15.
 */

'use strict';

var Client = require('ssh2');

var conn = new Client();

conn.on('ready', function() {
    console.log('Connection Successful');
    console.log('Now going to disconnect the session');
    conn.end();
});

conn.on('error', function(error) {
    console.log('Error occurred while connecting to machine!');
    throw error;
});

conn.on('end', function() {
    console.log('Connection ended');
    conn.removeAllListeners();
    console.log('All listeners are removed!');
});

conn.connect({
    host: 'someRemoteMachine',
    port: 22,
    username: 'userName',
    password: 'yourPwd'
});