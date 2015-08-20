(function(){
  'use strict';

  describe('RegistrationService', function(){
    var httpMock, registrationService, env, candidate;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($httpBackend, RegistrationService){
      httpMock = $httpBackend;
      registrationService = RegistrationService;
      env = { baseUrl: 'http://localhost:3000/v1' };
      candidate = { 'email': 'blah@blah.com', 'password': 'pass', 'first_name': 'Ana', 'last_name': 'Banana', 'user_type': 'Candidate' };
    }));

    // Makes sure the backend was able to satisfy the request
    afterEach(inject(function() {
        httpMock.verifyNoOutstandingExpectation();
        httpMock.verifyNoOutstandingRequest();
    }));

    describe('registerCandidate', function(){
      it('should register a candidate', function(){
        var response = { candidate_id: 1 };
        var candidateInfo = { user: candidate };

        httpMock.expectPOST(env.baseUrl + '/users', candidateInfo).respond(201, response);

        var promise = registrationService.registerCandidate(candidate);

        httpMock.flush();

        promise.then(function(success){
          expect(success.data).toEqual(response)
        });
      });
    });

  });

})();
