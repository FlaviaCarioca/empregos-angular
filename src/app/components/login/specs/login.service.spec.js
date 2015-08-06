(function(){
  'use strict';

  describe('Login Service', function(){
    var httpMock, http, loginService, env, credentials;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($httpBackend, LoginService){
      httpMock = $httpBackend;
      loginService = LoginService;
      env = { baseUrl: 'http://localhost:3000/v1' };
      credentials = { "username": 't@x.com', "password": "blah" };
    }));

    // Makes sure the backend was able to satisfy the request
    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should return auth token the user when called with valid credentials', function(){
      var response = { 'auth_token': 'xxx.www.yyyy' };
      var auth = { 'auth': credentials };

      httpMock.expectPOST(env.baseUrl + '/auth', auth).respond(200, response);

      var promise = loginService.login(credentials);
      httpMock.flush();

      promise.then(function(success){
        expect(success.data).toEqual(response);
      });
    });
  });
})();
