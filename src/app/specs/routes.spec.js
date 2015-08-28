(function(){
  'use strict';

  describe('Routes', function(){
    var location, rootScope, state;

    beforeEach(module('empregosAngular'));

    beforeEach(inject(function($location, $rootScope, $state){
      location = $location;
      rootScope = $rootScope;
      state = $state;
    }));

    it('home should be defined with correct templateUrl', function(){
      location.path('/');
      rootScope.$digest();
      expect(state.current.templateUrl).toEqual('app/components/home/home.html');
    });

    it('login should be defined with correct controller and templateUrl', function(){
      location.path('/login');
      rootScope.$digest();
      expect(state.current.controller).toEqual('LoginController');
      expect(state.current.controllerAs).toEqual('loginCtrl');
      expect(state.current.templateUrl).toEqual('app/components/login/login.template.html');
    });

    it('pre registration should be defined with correct controller and templateUrl', function(){
      location.path('/pre-registration');
      rootScope.$digest();
      expect(state.current.controller).toEqual('RegistrationController');
      expect(state.current.controllerAs).toEqual('regCtrl');
      expect(state.current.templateUrl).toEqual('app/components/registration/registration.template.html');
    });

    it('candidate profile should be define with correct controller and templateUrl', function(){
      location.path('/candidate');
      // Setting loggedUser to true to simulate a logged user, otherwise the http interceptor
      // will redirect to the home page
      rootScope.loggedUser = true;

      rootScope.$digest();

      expect(state.current.controller).toEqual('CandidateController');
      expect(state.current.controllerAs).toEqual('candidateCtrl');
      expect(state.current.templateUrl).toEqual('app/components/user/candidate/candidate.template.html');
    });
  });
})();
