(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService($http, ENV){
      return {
        login: function(credentials){
          var auth = JSON.stringify({ auth: credentials });
          // this returns a promise that will be handled in the controller
          return $http({ method: "POST", url: ENV.baseApi + "/auth", data: auth });
        }
      };
    }
})();
