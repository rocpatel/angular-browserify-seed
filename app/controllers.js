var headerController = require('./controllers/header');
module.exports = function (angular, moduleName) {
  angular.module(moduleName,[])
    .controller('HeaderController',['$scope',headerController]);
  return moduleName;
};