(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .controller('CandidateController', candidateController);

    /*ngInject*/
    function candidateController($scope, $log, candidateService){
      var vm = this;
      vm.candidateProfile = {};

      vm.updateCandidateProfile =  updateCandidateProfile;

      function updateCandidateProfile(){
        console.log(vm.candidateProfile);
        candidateService.updateCandidateProfile(vm.candidateProfile)
          .then(function(success){
            $log.debug("Success: candidateRegistrationController.updateCandidateProfile");
          })
          .catch(function(error){
            $log.debug("Error: candidateRegistrationController.updateCandidateProfile" + error.data);
          });
      }
    }
})();
