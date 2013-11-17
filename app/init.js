module.exports = function (appName) {
  window.bootstrap = function () {
    angular.bootstrap(document, [appName]);
  }

  window.init = function () {
    window.bootstrap();
  }

  $(document).ready(function () {
    if (window.location.hash == "#_=_") window.location.hash = "";
    window.init();
  });
};