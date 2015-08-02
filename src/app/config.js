(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .config(config);
  
  
  /** @ngInject */
  function config($logProvider, toastr, $httpProvider) {
    $httpProvider.interceptors.push(httpInterceptor);
      
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }
  
  /** ngInject */
  function httpInterceptor($q, $window, $location, $log){
    return {
      'request': function(request){
        // Automatically adds the JWT token to the header of each request
        $log.debug(request);
        var token = $window.sessionStorage.getItem("token");
        if (token !== null){
          request.headers.Authorization = 'Bearer ' + token;
        }
        return request;
      },
      'response': function(response){
          // If a token was sent back, save it
          $log.debug(response);
          if (response.data.auth_token){
            $window.sessionStorage.setItem('token', response.data.auth_token);
            $log.debug(response.data.auth_token);
          }
    
          if (response.status === 401) {
              $window.sessionStorage.removeItem('token');
              $log.debug("Response 401");
          }
          return response || $q.when(response);
      },
      'responseError': function(rejection) {
        $log.debug(rejection);
          if (rejection.status === 401) {
              $log.debug("Response Error 401", rejection);
              $location.path('/login');
          }
          return $q.reject(rejection);
      }
    };
  }
  

})();
