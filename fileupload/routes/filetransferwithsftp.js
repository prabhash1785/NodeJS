/**
 * Created by prrathore on 1/12/15.
 */

var Sftp = require('sftp-upload'),
    fs = require('fs');

var options = {
        host:'stage2c6724.qa.paypal.com',
        username:'prrathore',
        //password:'Nod3IsFun!',
        path: '/Users/prrathore/temp',
        remoteDir: '/x/home/prrathore/temp', //uploaded files to /x/home/prrathore/x/home/prrathore/temp dir
        privateKey: fs.readFileSync('/Users/prrathore/.ssh/id_rsa')
    },
    sftp = new Sftp(options);

sftp.on('error', function(err){
    throw err;
})
    .on('uploading', function(pgs){
        console.log('Uploading', pgs.file);
        console.log(pgs.percent+'% completed');
    })
    .on('completed', function(){
        console.log('Upload Completed');
    })
    .upload();
