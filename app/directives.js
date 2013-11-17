module.exports = function (angular, appName) {
  var moduleName = appName + '.directives';
  angular.module(moduleName,[]);
  return moduleName;
};
