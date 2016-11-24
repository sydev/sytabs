(function() {
  'use strict';

  module.exports = exports = function syLink() {
    return {
	    require: '^syTabs',
	    restrict: 'E',
	    scope: {
	      pane: '@'
	    },
	    link: (scope, ele, attr, tabsCtrl) => {
	      scope.pane = (angular.isUndefined(scope.pane)) ? 0 : parseInt(scope.pane);

        scope.$on('panesChange', (e, val) => scope.panes = val);

        scope.select = tabsCtrl.select;
	    },
	    template: `<a href="javascript:void(0)" data-ng-click="select(panes[pane])">{{panes[pane].title}}</a>`
	  };
  };
})();
