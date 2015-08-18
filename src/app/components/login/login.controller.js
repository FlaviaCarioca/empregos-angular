(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .controller('LoginController', loginController);

    /** @ngInject */
    function loginController($scope, $location, $rootScope, $log, LoginService){
      var vm = this;
      vm.auth = {};
      vm.login = login;

      function login(){
         LoginService.login(vm.auth)
          .then(function(success){
            $rootScope.loggedUser = true;
            if (success.data.user_type === 'Candidate'){
              $location.path('/candidate');
            } else {
              $location.path('/company');
            }

            console.log(success.data);
           })
           .catch(function(error){
              $rootScope.loggedUser = false;
              if(error.status === 401){
                vm.message = error.data.error;
              }
              else {
                vm.message = error.data.error || "There was problem, please try again later.";
              }

              vm.auth = {}; //clear the fields
              $scope.loginForm.$setPristine(); //set the form to pristine again.
          });
        }
      }
})();
