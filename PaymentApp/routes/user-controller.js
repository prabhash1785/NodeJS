'use strict';

module.exports = function module(app) {

    var service = require('../services/user-service.js')(app.locals.users);

    return {

        findAll: function findAll(req, res, next) {
            service.findAll(function onFound(err, users) {
                if (!err) {
                    return res.redirect('index.html');
                }
                res.send(500);
            });
        },

        setCurrentUser: function setCurrentUser(req, res, next) {
            req.session['userId'] = req.query.userId;
            return res.json({results:'OK'});
        },

        currentUser: function currentUser(req, res, next) {
            if (req.query.userId) {
                console.log("set; user id = " + req.query.userId);
                req.session['userId'] = req.query.userId;
                return res.json({results: 'OK'});
            }
            else {
                console.log('currentUser, userId = ' + req.session.userId);
                var id = req.session.userId.trim();
                service.findOne(id, function onFoundOneJson(err, user) {
                    if (!err) {
                        return res.json(user);
                    }
                    res.json({
                        message: err.message
                    });
                });

            }
        },

        findAllJson: function findAllJson(req, res, next) {
            service.findAll(function onFoundJson(err, users) {
                if (!err) {
                    return res.json(users);
                }
                res.json({
                    message: err.message
                });
            });
        },

        findOneJson: function findOneJson(req, res, next) {
            service.findOne(req.params.id, function onFoundOneJson(err, user) {
                if (!err) {
                    return res.json(user);
                }
                res.json({
                    message: err.message
                });
            });
        },

        findOne: function findOne(req, res, next) {
            var id = req.params.id || req.query.id;
            service.findOne(id, function onFoundOneJson(err, user) {
                if (!err) {
                    req.session['userId'] = id;  // current id returned to
                    return res.render('user/editUser', {});
                }
                res.json({
                    message: err.message
                });
            });
        },

        addUser: function addUser(req, res, next) {
            service.addUser(req.body, function onAdded(err, user) {
                if (!err) {
                    return res.redirect('/');
                }
                res.send(500);
            });
        },

        addUserJson: function addUser(req, res, next) {
            service.addUser(req.body, function onAddedJson(err, user) {
                if (!err) {
                    return res.json(user);
                }
                res.json({
                    message: err.message
                });
            });
        },

        editUser: function editUser(req, res, next) {
            service.findAll(function onFound(err, users) {
                if (!err) {
                    return res.render('edit', {
                        users: users,
                        current: req.params.id
                    });
                }
                res.send(500);
            });
        },

        updateUser: function updateUser(req, res, next) {
            var id = req.params.id || req.body.id;
            service.updateUser(id, req.body, function onUpdated(err) {
                if (!err) {
                    return res.redirect('/');
                }
                res.send(500);
            });
        },

        updateUserJson: function updateUser(req, res, next) {
            service.updateUser(req.params.id, req.body, function onUpdatedJson(err) {
                if (!err) {
                    return res.json({
                        id: req.params.id
                    });
                }
                res.json({
                    message: err.message
                });
            });
        },

        deleteUser: function deleteUser(req, res, next) {
            var id = req.params.id || req.query.id;
            service.deleteUser(id, function onDeleted(err) {
                if (!err) {
                    return res.redirect('/');
                }
                res.send(500);
            });
        },

        deleteUserJson: function deleteUserJson(req, res, next) {
            service.deleteUser(req.params.id, function onDeletedJson(err) {
                if (!err) {
                    return res.json({
                        id: req.params.id
                    });
                }
                res.json({
                    message: err.message
                });
            });
        }

    };
};