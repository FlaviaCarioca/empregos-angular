(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .run(runBlock)
    .run(secureRoutes)
    .run(loadFoundation);

  /** @ngInject */
  function loadFoundation ($rootScope) {
      // loads the Foundation Framework
      $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
      });
   }

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

  /** @ngInject */
  function secureRoutes($rootScope, $location, $log) {
    // Make sure the routes a secured. Only logged users can access them.
    $rootScope.$on("$stateChangeStart", function(event, next, current) {

      // Used to show or hide the footer
      $rootScope.isHomePage = false;
      if (next.url === '/' ){
        $rootScope.isHomePage = true;
      }
      // The request route needs user to be logged in.
      if (next.access !== undefined && next.access.requiresLogin){
        // Not a logged user, redirect to /login
        if (!$rootScope.loggedUser) {
          $log.debug("Trying to reach route " + next.url + " without login." );
          $location.path("/");
        }
      }
    });
  }

})();
