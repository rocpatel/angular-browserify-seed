(function () {
  function HeaderController($scope) {
    $scope.navBarEntries = [
      { title: "Menu1", link: ""},
      { title: "Menu2", link: ""},
      { title: "Menu3", link: ""}
    ];
  }

  module.exports = HeaderController;
})();