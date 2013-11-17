var headerController = require('./controllers/header');

module.exports = function (angular, appName) {
  var moduleName = appName + '.controllers';
  angular.module(moduleName,[])
    .controller('HeaderController',['$scope',headerController]);
  return moduleName;
};