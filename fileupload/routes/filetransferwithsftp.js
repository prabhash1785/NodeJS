/**
 * Created by prrathore on 1/12/15.
 */

var Sftp = require('sftp-upload'),
    fs = require('fs');

var options = {
        host:'machine_name',
        username:'username',
        path: '/Users/username/temp',
        remoteDir: '/x/home/username/temp', //uploaded files to /x/home/username/temp dir
        privateKey: fs.readFileSync('/Users/username/.ssh/id_rsa')
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
