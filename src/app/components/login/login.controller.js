(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(UserService, $scope, $location, $window, $rootScope){
      var vm = this;
      vm.auth = {};
      vm.login = login;

      function login(){
         UserService.login(this.auth)
          .then(function(success){
            // Store token in the sessionStore for future use
            // $window.sessionStorage.setItem('token', success.data['auth_token']);
            $rootScope.loggedUser = true;
            $location.path('/dashboard');
          }, function(error){
              $window.sessionStorage.removeItem('token');
              $rootScope.loggedUser = false;
              
              if(error.status === 401){
                vm.message= error.data.error;
              }
              else {
                vm.message = "There was problem, please try again later.";
              }
              
              vm.auth = {}; //clear the fields
              $scope.loginForm.$setPristine(); //set the form to pristine again.
          });
        }
      }
})();
