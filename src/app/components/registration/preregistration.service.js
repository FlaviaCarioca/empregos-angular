(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('preRegistrationService', preRegistrationService);

    /*ngInject*/
    function preRegistrationService($http, ENV, $log){
      return{
        registerCandidate: function(candidateInfo){
          var candidateInfo = JSON.stringify({ candidate: candidateInfo });
          $log.debug(candidateInfo);
          // Returns a promise to the controller
          return $http({method: 'POST', url: ENV.baseApi + '/candidate/create', data: candidateInfo});
        }
      }
    }
})();
