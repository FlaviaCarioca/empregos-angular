(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .run(runBlock)
    .run(secureRoutes);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
  
  // Make sure the routes a secured
  /** @ngInject */
  function secureRoutes($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      if (!$rootScope.loggedUser) {
        // no logged user, redirect to /login
        if (next.templateUrl === "login.html") {
        } else {
          $location.path("/login");
        }
      }
    });
  }

})();
