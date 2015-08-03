(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        access: {
          requiresLogin: false
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.template.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        access: {
          requiresLogin: false
        }
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/components/user/candidate/registration.template.html',
        controller: 'RegistrationController',
        access: { // TODO: This should be an object with permission roles, etc.
          requiresLogin: true
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
