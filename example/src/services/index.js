'use strict';


const users = require('./users');


module.exports = function() {
  const app = this;


  app.configure(users);
};
