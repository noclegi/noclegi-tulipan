var express = require('express');
var installRoutes = require('./routes')


var Server = function() {

  var app = express();

  app.set('views', 'views');
  app.set('view engine', 'jade');

  app.use(express.static('compiled/public'));
  app.use(express.static('public'));

  installRoutes(app);

  this.expressApp = app;
}

Server.prototype.listen = function(port) {
  this.expressApp.listen(port);
};

module.exports = Server;
