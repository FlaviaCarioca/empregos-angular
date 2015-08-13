(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $httpProvider, $provide) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push(httpInterceptor);

    $provide.decorator('$log', logDecorator);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

  /** ngInject */
  function logDecorator($delegate) {
    // Keep track of the original debug method, we'll need it later.
    var origDebug = $delegate.debug;

    //Intercept the call to $log.debug() so we can add on the timestamp enhancement.
    $delegate.debug = function () {
        var args = [].slice.call(arguments);
        args[0] = [moment().format('MMMM Do YYYY, h:mm:ss a'), ': ', args[0]].join('');

        // Send on our enhanced message to the original debug method.
        origDebug.apply(null, args);
    };

    $delegate.debug.logs = []; //keeps angular-mocks happy;
    return $delegate;
  }


  /** ngInject */
  function httpInterceptor($q, $window, $location, $log){
    return {
      'request': function(request){
        // Automatically adds the JWT token to the header of each request
        var token = $window.sessionStorage.getItem("token");
        if (token !== null){
          request.headers.Authorization = 'Bearer ' + token;
        }
        return request;
      },
      'response': function(response){
          // If a token was sent back, save it
          if (response.data.auth_token){
            $window.sessionStorage.setItem('token', response.data.auth_token);
          }

          if (response.status === 401) {
              // Remove token if unauthorized response
              $window.sessionStorage.removeItem('token');
          }
          return response || $q.when(response);
      },
      'responseError': function(rejection) {
          if (rejection.status === 401) {
            $location.path('/login');
          }
          return $q.reject(rejection);
      }
    };
  }


})();
