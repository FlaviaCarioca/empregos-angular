(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('UserService', UserService);

    /** @ngInject */
    function UserService($http){
      return {
        login: function(username, password){
          var auth = { "auth": {
                                "username": username,
                                "password": password
                              }
                      };

          // this returns a promise that will be handled in the controller
          return $http({method: "POST", url: "/v1/auth", data: auth});

        }
      };
    }
})();
