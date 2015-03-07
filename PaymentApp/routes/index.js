'use strict';

module.exports = function module(app) {

    var userController = require('./user-controller')(app);

    app.get('/', userController.findAll);
    app.post('/user/create', userController.addUser);
    app.post('/user/update', userController.updateUser);
    app.get('/user/edit', userController.findOne);

    // REST API routes
    app.get('/api/users', userController.findAllJson);
    app.get('/api/currentUser', userController.currentUser);
    app.get('/api/users/:id', userController.findOneJson);
    app.post('/api/users', userController.addUserJson);
    app.get('/api/setCurrentUser', userController.setCurrentUser);
    app.delete('/api/users/:id', userController.deleteUserJson);
    app.post('/api/users/:id', userController.updateUserJson);

};