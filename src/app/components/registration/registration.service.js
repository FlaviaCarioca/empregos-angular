(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('registrationService', registrationService);

    /*ngInject*/
    function registrationService($http, ENV, $log){
      return{
        registerCandidate: function(candidateInfo){
          var candidate = JSON.stringify({ user: candidateInfo });

          // Returns a promise to the controller
          return $http({ method: 'POST', url: ENV.baseApi + '/users', data: candidate });
        }
      };
    }
})();
