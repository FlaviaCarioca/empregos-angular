(function () {
  'use strict';

  describe('LoginController', function(){
    var httpMock, scope, rootScope, location, controller, loginCredentials, url, candidate_type;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($rootScope, $httpBackend, $controller, $location) {
      httpMock = $httpBackend;
      scope = $rootScope.$new();
      rootScope = $rootScope;
      location = $location;
      controller = $controller('LoginController', { $scope: scope });
      scope.loginForm = {};
      loginCredentials = { "username": 'x@x.com', "password": "blah" };
      controller.auth = loginCredentials;
      candidate_type = 'Candidate';
      url = 'http://localhost:3000/v1/auth';
    }));


    afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
    });

    describe('vm.login', function(){
      it('should login registered user', function() {
        httpMock.expectPOST(url, { "auth": loginCredentials }).respond(200, { 'auth_token': 'xxx.www.yyyy',
                                                                             'user_type': candidate_type });

        controller.login();

        httpMock.flush();

        expect(rootScope.loggedUser).toBe(true);
        expect(location.path()).toBe('/candidate');
      });

      it('should return 401 for unregistered user', function(){
        scope.loginForm = {
          $setPristine: jasmine.createSpy('$setPristine')
        };

        httpMock.expectPOST(url, { "auth": loginCredentials }).respond(401, { error: 'Invalid username or password' });

        controller.login();

        httpMock.flush();

        expect(rootScope.loggedUser).toBe(false);
        expect(controller.auth).toEqual({});
        expect(controller.message).toEqual('Invalid username or password');
        expect(scope.loginForm.$setPristine).toHaveBeenCalled();

      });

      it('should return generic message for all other errors than 401', function(){
        scope.loginForm = {
          $setPristine: jasmine.createSpy('$setPristine')
        };

        httpMock.expectPOST(url, { "auth": loginCredentials }).respond(403, { error: 'Forbidden' });

        controller.login();

        httpMock.flush();

        expect(rootScope.loggedUser).toBe(false);
        expect(controller.auth).toEqual({});
        expect(controller.message).toEqual('Forbidden');
        expect(scope.loginForm.$setPristine).toHaveBeenCalled();
      });

    });
  });
}());
