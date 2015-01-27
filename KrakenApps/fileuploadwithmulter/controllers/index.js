'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        res.render('datauploadform', model);
        
    });

    router.post('/uploadwithmulter', function (req, res) {

        console.log("In router.post middleware: Going to update file upload status!!");
        model.status = "File Uploaded!!";

        res.render('datauploadform', model);

    });

};
