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
      .state('pre_reg', {
        url: '/pre-registration',
        templateUrl: 'app/components/registration/preregistration.template.html',
        //controller: 'PreregistrationController',
        access:{
          requiresLogin: false
        }
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/components/user/candidate/registration.template.html',
        controller: 'RegistrationController',
        access: { // TODO: This prob should be an object with permission roles, etc.
          requiresLogin: false
        }
      });

    $urlRouterProvider.otherwise('/');

    // use the HTML5 History API  and make the urls pretty (without #)
    $locationProvider.html5Mode(true);
  }

})();
