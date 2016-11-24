/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {
	  'use strict';

	  var sytabsDirective = __webpack_require__(1);
	  var sypaneDirective = __webpack_require__(2);
	  var sylinkDirective = __webpack_require__(3);

	  module.exports = exports = angular.module('sy.tabs', []).directive('syTabs', sytabsDirective).directive('syPane', sypaneDirective).directive('syLink', sylinkDirective);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  'use strict';

	  module.exports = function syTabs() {
	    return {
	      restrict: 'E',
	      transclude: true,
	      scope: {
	        animated: '=',
	        justified: '=',
	        scrollable: '=',
	        scrollableHeight: '='
	      },
	      controller: ['$scope', function ($scope) {
	        var self = this,
	            panes = self.panes = $scope.panes = [];

	        $scope.$watchGroup(['animated', 'scrollable', 'scrollableHeight'], function (newValue, oldValue) {
	          $scope.$broadcast('attrChange', newValue);
	        });

	        $scope.$watch('panes', function (newValue, oldValue) {
	          $scope.$broadcast('panesChange', newValue);
	        });

	        self.animated = $scope.animated;
	        self.scrollable = $scope.scrollable;
	        self.scrollableHeight = $scope.scrollableHeight;

	        $scope.select = this.select = function (pane) {
	          angular.forEach(panes, function (_pane) {
	            return _pane.selected = _pane == pane ? true : false;
	          });
	        };

	        this.addPane = function (pane) {
	          if (panes.length === 0) $scope.select(pane);
	          panes.push(pane);
	        };
	      }],
	      template: '<div class="tabbable">\n        <ul class="nav nav-tabs" data-ng-class="{\'nav-justified\': justifed}">\n          <li ng-repeat="pane in panes" data-ng-class="{active: pane.selected}">\n            <a href="javascript:void(0)" data-ng-click="select(pane)">\n              {{pane.title}}\n              <span data-ng-if="pane.icon" data-ng-class="pane.icon"></span>\n            </a>\n          </li>\n        </ul>\n      <div class="tab-content" data-ng-transclude></div>\n    </div>'
	    };
	  };
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function () {
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
							link: function link(scope, ele, attrs, tabsCtrl) {
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
											    css = bool ? { maxHeight: height + 'px', overflowY: 'auto' } : { maxHeight: '', overflowY: '' };

											tabPanes.css(css);
									}

									scope.$on('attrChange', function (e, values) {
											setAnim(values[0]);
											setScrollable(values[1], values[2]);
									});

									setAnim(tabsCtrl.animated);
									setScrollable(tabsCtrl.scrollable);
							},
							template: '<div class="tab-pane fade" data-ng-class="{fade: anim, in: selected, hidden: !anim && !selected}" data-ng-transclude></div>'
					};
			};
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	(function () {
			'use strict';

			module.exports = exports = function syLink() {
					return {
							require: '^syTabs',
							restrict: 'E',
							scope: {
									pane: '@'
							},
							link: function link(scope, ele, attr, tabsCtrl) {
									scope.pane = angular.isUndefined(scope.pane) ? 0 : parseInt(scope.pane);

									scope.$on('panesChange', function (e, val) {
											return scope.panes = val;
									});

									scope.select = tabsCtrl.select;
							},
							template: '<a href="javascript:void(0)" data-ng-click="select(panes[pane])">{{panes[pane].title}}</a>'
					};
			};
	})();

/***/ }
/******/ ]);