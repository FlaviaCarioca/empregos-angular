(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .factory('user', UserService)

    function UserService($http){
      return {
        login: function(username, password){
          var auth = "auth": {
                                "username": username,
                                "password": password
                              }

          $http({method: "POST", url: "/v1/login"}, data: auth).then(handleSuccess, handleError("Error during login"));
        }
      }
    }

    // private functions
    function handleSuccess(data) {
        return data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

})();
