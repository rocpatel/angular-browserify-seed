var appName = 'myApp';

var controllers = require('./controllers')(angular,appName + '.controllers')
  , services = require('./services')(angular,appName + '.services')
  , directives = require('./directives')(angular,appName + '.directives')
  , filters = require('./filters')(angular,appName + '.filters')
  , config = require('./config')
  , init = require('./init');

var app = angular.module(appName, [
  'ngCookies',
  'ngResource',
  'ngRoute',
  controllers,
  services,
  directives,
  filters
]);

init(appName);

module.exports = config(app);