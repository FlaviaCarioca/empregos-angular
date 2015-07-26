(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .directive('empregosNavbar', empregosNavbar);

  function empregosNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/common/navbar/navbar.html'
    };

    return directive;
  }

})();
