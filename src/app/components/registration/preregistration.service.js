(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('preRegistrationService', preRegistrationService);

    /*ngInject*/
    function preRegistrationService($http, ENV){
      return{
        preRegistration: function(candidateInfo){
          $log.debug('register candidate metho in service');
          var candidateInfo = JSON.stringify({ candidate_info: candidateInfo });
          $log.debug(candidateInfo);
          // Returns a promise to the controller
          return $http({method: 'POST', url: ENV.baseApi + '/candidate/create', data: candidateInfo});
        }
      }
    }
})();
