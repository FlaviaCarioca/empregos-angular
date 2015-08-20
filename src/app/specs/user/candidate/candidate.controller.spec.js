(function(){
  'use strict';

  describe('CandidateController', function(){
    var httpMock, scope, rootScope, location, controller, url, profile;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($httpBackend, $rootScope, $location, $controller){
      httpMock = $httpBackend;
      scope = $rootScope.$new();
      location = $location;
      controller = $controller('CandidateController', { $scope: scope });
      profile = {
        'address': '123 Main St',
        'city': 'San Francisco'  ,
        'state': 'CA',
        'zip': 94110,
        'title': 'Software Engineer',
        'description': 'blah blah blah',
        'minimum_salary': '150000',
        'linkedin': 'http://linkedin.com/someone.html',
        'github': 'http://github.com/someone.html',
        'is_active': true,
        'can_relocate': false,
        'can_remote': true,
        'is_visa_needed': false
      };
      controller.candidateProfile = profile;
      url = 'http://localhost:3000/v1/candidate';
    }));

    describe('vm.updateCandidateProfile', function(){
      it('should update the candidate profile', function(){
        httpMock.expectPUT(url, { candidate: profile }).respond(200, nil);

        controller.updateCandidateProfile();

        httpMock.flush();

        // TODO: need to finsih this;
        //expect()
      });

      it('should return an error if the candidate profile cannot be updated', function(){
        httpMock.expectPUT(url, { candidate: profile }).respond(500, { error: 'Something went wrong. Please try again later' });

        candidateController.updateCandidateProfile();

        httpMock.flush();

        expect(controller.message).toEqual('Something went wrong. Please try again later');
      });
    });

  });
})();
