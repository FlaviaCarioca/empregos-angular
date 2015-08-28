(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
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
      .state('prereg', {
        url: '/pre-registration',
        templateUrl: 'app/components/registration/registration.template.html',
        controller: 'RegistrationController',
        controllerAs: 'regCtrl',
        access:{
          requiresLogin: false
        }
      })
      .state('candidateRegistration', {
        url: '/candidate',
        templateUrl: 'app/components/user/candidate/candidate.template.html',
        controller: 'CandidateController',
        controllerAs: 'candidateCtrl',
        access: {
          requiresLogin: true
        }
      });

    $urlRouterProvider.otherwise('/');

    // use the HTML5 History API  and make the urls pretty (without #)
    $locationProvider.html5Mode(true);
  }

})();
