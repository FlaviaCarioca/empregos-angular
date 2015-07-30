(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(UserService, $scope){
      var ctrl = this;
      ctrl.auth = {};
      ctrl.login = login;

      function login(){
         UserService.login(this.auth)
          .then(function(sucesss){
            console.log(sucess);
          }, function(error){
            console.log(error.status + ' ' + error.data.error);
            if(error.status === 401){
              ctrl.message= error.data.error;
            }
            else {
              ctlr.message = "There was problem, pleases try again later."
            }
            ctrl.auth = {}; //clear the fields
            $scope.loginForm.$setPristine(); //set the form to pristine again.
          });
        }
      }
})();
