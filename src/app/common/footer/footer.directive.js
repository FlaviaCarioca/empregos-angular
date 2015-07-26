(function(){
  'use strict';
  
  angular
      .module('empregosAngular')
      .directive('empregosFooter', empregosFooter);
  
  function empregosFooter(){
      var directive = {
        restrict: 'E',
        templateUrl: '/app/common/footer/footer.html'
      }
      
      return directive;
  }
  
})();
