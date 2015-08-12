(function(){
  'use strict';

  angular
    .module('empregosAngular')
    .controller('PreregistrationController', preregistrationController);

    /** @ngInject */
    function preregistrationController($scope, $log){
      var vm = this;
      vm.candidateInfo = {};

      vm.preregister = preregister;

      function preregister(){

      }

    }
})();
