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
      location.path('/')
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
  });
})();
