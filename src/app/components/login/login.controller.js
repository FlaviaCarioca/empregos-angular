(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController(LoginService, $scope, $location, $window, $rootScope){
      var vm = this;
      vm.auth = {};
      vm.login = login;

      function login(){
         LoginService.login(this.auth)
          .then(function(success){
            $rootScope.loggedUser = true;
            $location.path('/registration');
          }, function(error){
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
