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
        templateUrl: 'app/components/home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/user/login/login.html'
        controller: 'LoginController',
        controllerAS: 'loginCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
