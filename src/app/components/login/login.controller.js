(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(UserService){
      var ctrl = this;

      ctrl.login = function(){
        UserService.login(ctrl.username, ctrl.password).success(function(data){

        });
      };
    }

})();
