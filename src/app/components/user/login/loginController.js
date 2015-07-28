(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', ['UserService', function(UserService){
      var controller = this;

      UserService.login(username, password).success(function(data){

      });

    }]);

})();
