(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
