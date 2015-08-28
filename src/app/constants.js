/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('empregosAngular')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('USER_TYPE', { 'CANDIDATE': 'Candidate', 'COMPANY': 'Company' });
})();
