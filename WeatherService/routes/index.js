var express = require('express');
var router = express.Router();

var error; //used to initialize error object

/* GET Weather Search home page for one city at a time. */
router.get('/', function(req, res) {
    res.render('weather/WeatherSearch', {
        title: 'Express',
        error: null
    });
});

/* GET Weather Search home page for multiple cities at a time. */
router.get('/weatherSearchForCities', function(req, res) {
    res.render('weather/WeatherSearchForCities', {
        error: null     //initially setting error field as null when search page is loaded first
    });
});

module.exports = router;
