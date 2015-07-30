(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(UserService, $scope, $location){
      var ctrl = this;
      ctrl.auth = {};
      ctrl.login = login;

      function login(){
         UserService.login(this.auth)
          .then(function(success){
            // TODO: Store token for future use
            $location.path('/dashboard');
          }, function(error){
            console.log(error.status + ' ' + error.data.error);
            if(error.status === 401){
              ctrl.message= error.data.error;
            }
            else {
              ctlr.message = "There was problem, please try again later."
            }
            ctrl.auth = {}; //clear the fields
            $scope.loginForm.$setPristine(); //set the form to pristine again.
          });
        }
      }
})();
