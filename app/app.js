var appName = 'myApp';

var controllers = require('./controllers')(angular,appName)
  , services = require('./services')(angular,appName)
  , directives = require('./directives')(angular,appName)
  , filters = require('./filters')(angular,appName)
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