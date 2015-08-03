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
  function secureRoutes($rootScope, $location, $log) {
    // Make sure the routes a secured. Only logged users can access them.
    $rootScope.$on("$stateChangeStart", function(event, next, current) {
      // The request route needs user to be logged in.
      if (next.access !== undefined && next.access.requiresLogin){
        // Not a logged user, redirect to /login
        if (!$rootScope.loggedUser) {
          $log.debug("Trying to reach route " + next.url + " without login." )
          $location.path("/");
        }
      }
    });
  }

})();
