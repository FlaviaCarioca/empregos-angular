(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(UserService){
        var ctrl = this;

        ctrl.login = login;


        function login(){
            UserService.login(ctrl.username, ctrl.password)
            .then(function(sucesss){
              console.log(sucess);
            }, function(error){
              console.log(error.status + ' ' + error.data.error);
            });
          }
        }
})();
