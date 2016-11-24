(function() {
  'use strict';

  const sytabsDirective = require('./sytabs.directive.sytabs');
  const sypaneDirective = require('./sytabs.directive.sypane');
  const sylinkDirective = require('./sytabs.directive.sylink');

  module.exports = exports = angular.module('sy.tabs', [])
    .directive('syTabs', sytabsDirective)
    .directive('syPane', sypaneDirective)
    .directive('syLink', sylinkDirective);
})();
