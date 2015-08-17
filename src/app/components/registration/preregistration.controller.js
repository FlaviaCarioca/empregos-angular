(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .controller('PreregistrationController', preRegistrationController);

    /** @ngInject */
  function preRegistrationController($scope, $location, $log, preRegistrationService){
      var vm = this;
      vm.candidateInfo = {
        user_type: 'candidate'
      };
      vm.registerCandidate = registerCandidate;

      function registerCandidate(){
        //call API
        preRegistrationService.registerCandidate(vm.candidateInfo)
          .then(function(success){
            // Go to the registration details page
            $log.debug(success);
            $location.path('/login');
          })
          .catch(function(error){
            $log.debug(error);
            vm.message = error.data.error || "There was problem, please try registering again later.";
          });
       }
    }
})();
