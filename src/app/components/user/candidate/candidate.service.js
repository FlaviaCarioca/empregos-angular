(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('candidateService', candidateService);

    /*ngInject*/
    function candidateService($http, ENV){
      return {
        updateCandidateProfile: function(candidateProfile){
          var candidate = JSON.stringify({ candidate: candidateProfile });
          console.log(candidate + ' in service');
          // This will return a promise
          return $http({ method: 'PUT', url: ENV.baseApi + '/candidate', data: candidate });
        }
      };
    }
})();
