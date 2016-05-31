'use strict';
const c = require('./controllers');

module.exports = function(server) {
  // Base routes
  server.route({method: 'GET', path: '/{path*}', handler: c.Base.index});
};