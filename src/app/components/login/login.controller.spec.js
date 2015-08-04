describe('LoginController', function(){
  var scope, httpMock, controller, location;

  beforeEach(module('empregosAngular'));

  beforeEach(inject(function($rootScope, $httpBackend, $controller, $location) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    rootScope = $rootScope
    location = $location;
    controller = $controller('LoginController', { $scope: scope });;
    scope.loginForm = {}
    loginCredentials = { "username": 'x@x.com', "password": "blah" };
  }));


  afterEach(function() {
   httpMock.verifyNoOutstandingExpectation();
   httpMock.verifyNoOutstandingRequest();
  });

  describe('vm.login', function(){
    it('should login registered user', function() {
      controller.auth = loginCredentials;

      httpMock.expectPOST('http://localhost:3000/v1/auth', { "auth": { "username": 'x@x.com', "password": "blah" } })
                        .respond(200, {'auth_token': 'xxx.www.yyyy'});

      controller.login();

      httpMock.flush();

      expect(rootScope.loggedUser).toBe(true);
      expect(location.$$path).toBe('/dashboard');
    });

    it('should return 401 for unregistered user', function(){
      var successCallback = jasmine.createSpy('success'),
          errorCallback = jasmine.createSpy('error');

      controller.auth = loginCredentials;
      scope.loginForm = {
        $setPristine: jasmine.createSpy('$setPristine')
      };



      httpMock.expectPOST('http://localhost:3000/v1/auth', { "auth": { "username": 'x@x.com', "password": "blah" } })
                        .respond(401, 'Invalid username or password');

      controller.login();//.success(successCallback).error(errorCallback);

      httpMock.flush();

      expect(rootScope.loggedUser).toBe(false);
      expect(controller.auth).toEqual({});

      expect(scope.loginForm.$setPristine).toHaveBeenCalled();

    });
  });
});
