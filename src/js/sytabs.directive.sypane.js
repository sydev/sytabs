(function() {
  'use strict';

  module.exports = exports = function syPane() {
    return {
	    require: '^syTabs',
	    restrict: 'E',
	    transclude: true,
	    scope: {
	      title: '@',
	      icon: '@'
	    },
      link: (scope, ele, attrs, tabsCtrl) => {
	      if (angular.isUndefined(scope.title)) scope.title = 'Pane';
	      if (angular.isUndefined(scope.icon)) scope.icon = false;

	      tabsCtrl.addPane(scope);

        /**
         * [setAnim description]
         * @param {[type]} bool [description]
         */
	      function setAnim(bool) {
	        scope.anim = bool;
	      }

        /**
         * [setScrollable description]
         * @param {[type]} bool   [description]
         * @param {[type]} height [description]
         */
	      function setScrollable(bool, height) {
	        var tabPanes = angular.element(document.querySelectorAll('.tab-pane')),
            css        = (bool) ? {maxHeight: height + 'px', overflowY: 'auto'} : {maxHeight: '', overflowY: ''};

          tabPanes.css(css);
	      }

	      scope.$on('attrChange', (e, values) => {
	        setAnim(values[0]);
	        setScrollable(values[1], values[2]);
	      });

	      setAnim(tabsCtrl.animated);
	      setScrollable(tabsCtrl.scrollable);
	    },
      template: `<div class="tab-pane fade" data-ng-class="{fade: anim, in: selected, hidden: !anim && !selected}" data-ng-transclude></div>`
    };
  };
})();
