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
        templateUrl: 'app/components/login/login.template.html',
        controller: 'LoginController',
        controllerAS: 'loginCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
