/**
 * Test to see how middlewares chaining work on Express route witn next and error parameters.
 *
 * Created by prrathore on 7/30/15.
 */

'use strict';

var express = require('express');
var router = express.Router();

function a(req, res, next) {
    console.log('a');
    next();
}

function b(req, res, next) {
    console.log('b');
    next();
}

function c(req, res, next) {
    console.log('c');
    next('no-skip'); //skip or no-skip
}

function display(err, req, res, next) {
    if(err === 'skip') {
        return next(err);
    } else {
        res.send('Successful Render');
    }
    console.log('display');
    next();
}

function end(err, req, res, next) {
    if(err) {
        res.send(err + ' Not fun to see error!!');
    }
    console.log('This is the end!!');
    next();
}

router.get('/', a, b, c, display, end);

module.exports = router;
