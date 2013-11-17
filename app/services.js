module.exports = function (angular, appName) {
  var moduleName = appName + '.services';
  angular.module(moduleName,[]);
  return moduleName;
}
