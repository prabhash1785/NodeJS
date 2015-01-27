'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        res.render('datauploadform', model);
        
    });

    router.get('/uploadwithmulter', function (req, res) {

        model.status = "File Uploaded!!";

        res.render('datauploadform', model);

    });

};
