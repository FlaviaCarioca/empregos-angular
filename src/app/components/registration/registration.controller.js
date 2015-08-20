(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .controller('RegistrationController', registrationController);

    /** @ngInject */
  function registrationController($scope, $location, $log, RegistrationService){
      var vm = this;
      vm.candidateInfo = {
        user_type: 'candidate'
      };
      vm.registerCandidate = registerCandidate;

      function registerCandidate(){
        //call API
        RegistrationService.registerCandidate(vm.candidateInfo)
          .then(function(success){
            console.log(success.data);
            // Go to the registration details page
            $location.path('/login');
          })
          .catch(function(error){
            vm.message = error.data.error || "There was problem, please try registering again later";
          });
       }
    }
})();
