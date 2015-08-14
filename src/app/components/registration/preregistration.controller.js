(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .controller('PreregistrationController', preRegistrationController);

    /** @ngInject */
  function preRegistrationController($scope, $location, $log, preRegistrationService){
      var vm = this;
      vm.candidateInfo = {};

      vm.registerCandidate = registerCandidate;

      function registerCandidate(){
        $log.debug('registerCandidate method in controller');
        //call API
        preRegistrationService.registerCandidate(candidateInfo)
          .then(function(sucess){
            // Go to the registration details page
            $location.path('/registration');
            $log.debug(success);
          })
          .catch(function(error){
            vm.message = error.data.error || "There was problem, please try registering again later.";
            $log.debug(error);
          });
      }
    }
})();
