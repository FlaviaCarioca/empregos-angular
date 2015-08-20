(function(){
  'use strict';

  describe('RegistrationController', function(){
    var httpMock, scope, rootScope, location, controller, candidate, url;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller, $location){
      httpMock = $httpBackend;
      scope = $rootScope.$new();
      rootScope = $rootScope;
      controller = $controller('RegistrationController', { $scope: scope });
      location = $location;
      candidate = { 'email': 'blah@blah.com', 'password': 'pass', 'first_name': 'Ana', 'last_name': 'Banana', 'user_type': 'Candidate' }
      controller.candidateInfo = candidate;
      url = 'http://localhost:3000/v1/users';
    }));

    afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
    });

    describe('vm.registerCandidate', function(){
      it('sucessfully registers a new candidate', function(){
        httpMock.expectPOST(url, { user: candidate }).respond(201, { candidate_id: 1 });

        controller.registerCandidate();

        httpMock.flush();

        expect(location.path()).toBe('/login');
      });

      it('should return an error message if the candidate cannot register', function(){
        httpMock.expectPOST(url, { user: candidate }).respond(422, { error: 'Something went wrong. Please try again later' });

        controller.registerCandidate();

        httpMock.flush();

        expect(controller.message).toEqual( 'Something went wrong. Please try again later');
      });
    });
  });
})();
