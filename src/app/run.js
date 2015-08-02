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
  
  /** @ngInject */
  function secureRoutes($rootScope, $location) {
    // Make sure the routes a secured. Only logged users can access them
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      if (!$rootScope.loggedUser) {
        // Not a logged user, redirect to /login
        $location.path("/login");
      }
    });
  }

})();
