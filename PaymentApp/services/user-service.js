'use strict';

/**
 * Utility function to generate a UUID in Javascript shamelessly borrowed from
 * stackoverflow
 */
function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = function module(users) {

  return {
    findAll : function findAll(callback) {
      callback(null, users);
    },

    findOne : function findOne(id, callback) {
      var i;
      for (i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          return callback(null, users[i]);
        }
      }
      callback(new Error('ENOUSER'));
    },

    addUser : function addUser(content, callback) {
      // In a real application, you would persist here to the database
      // Instead, we are updating our in-memory data

      var user = {};
      for (var key in content) {
        user[key] = content[key];
      };
      user.id = uuid();

      users.push(user);

      callback(null, user);
    },

    updateUser : function updateUser(id, content, callback) {
      users.forEach(function each(user) {
        if (id === user.id) {
          for(var key in content) {
            user[key] = content[key];
          }
          user.id = id;
          return callback();
        }
      });

      callback(new Error('ENOUSER'));
    },

    deleteUser : function deleteUser(id, callback) {
      var index = 0;
      users.forEach(function each(user) {
        if (id === user.id) {
          users.splice(index, 1);
          return callback();
        }
        index++;
      });

      callback(new Error('ENOUSER'));
    }
  };
};