/**
 * Created by prrathore on 1/26/15.
 */

var multer = require('multer');

module.exports = function() {

    return multer({
        dest: '/Users/prrathore/temp/cardfileuploads',
        limits: {
            fieldNameSize: 500,
            files: 2,
            fields: 5
        },
        rename: function (fieldname, filename) {
            return fieldname + filename + Date.now();
        },
        onFileUploadStart: function (file) {
            console.log('Upload starting for filename: ' + file.originalname);
        },
        onFileUploadData: function (file, data) {
            console.log(data.length + ' of ' + file.fieldname + ' arrived')
        },
        onParseStart: function () {
            console.log('Form parsing started at: ', new Date())
        },
        onParseEnd: function (req, next) {
            console.log('Form parsing completed at: ', new Date());
            next(); //call the next middleware
        }, // commenting this out coz we want to be called in the middleware next
        onFileUploadComplete: function (file) {
            console.log(file.fieldname + ' uploaded to  ' + file.path);
        },
        onFileSizeLimit: function (file) {
            console.log('Failed: ', file.originalname);
        },
        onFilesLimit: function () {
            console.log('Crossed file limit!')
        },
        onFieldsLimit: function () {
            console.log('Crossed fields limit!')
        },
        onPartsLimit: function () {
            console.log('Crossed parts limit!')
        },
        onError: function (error, next) {
            console.log("Error occurred while uploading the file!!");
        }

    });
};
