'use strict';

angular.module('sy.tabs', [])
.directive('syTabs', [function() {
	return {
		restrict: 'E',
		transclude: true,
    scope: {
      animated: '=',
      justified: '=',
      scrollable: '=',
      scrollableHeight: '@'
    },
		controller: ['$scope', function($scope) {
      var panes = this.panes = $scope.panes = [];
    
      $scope.$watchGroup(['animated', 'scrollable', 'scrollableHeight'], function(newValue, oldValue) {
        $scope.$broadcast('attrChange', newValue);
      });

      $scope.$watch('panes', function(newValue, oldValue) {
        $scope.$broadcast('panesChange', newValue);
      });
    
      this.animated = $scope.animated;
      this.scrollable = $scope.scrollable;
      this.scrollableHeight = $scope.scrollableHeight;
          
      $scope.select = this.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };
    
      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }],
    template: '<div class="tabbable"><ul class="nav nav-tabs" ng-class="{\'nav-justified\': justified}"><li ng-repeat="pane in panes" ng-class="{active: pane.selected}"><a href="" ng-click="select(pane)">{{pane.title}}</a></li></ul><div class="tab-content" ng-transclude></div></div>'
	};
}]).directive('syPane', [function() {
  return {
    require: '^syTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, ele, attrs, tabsCtrl) {
      if (angular.isUndefined(scope.title)) scope.title = 'Pane';
      
      tabsCtrl.addPane(scope);

      function setAnim(bool) {
        scope.anim = bool;
      }

      function setScrollable(bool, height) {
        var tabPanes = angular.element(document.querySelectorAll('.tab-pane'));
        if (bool) {
          tabPanes.css({maxHeight: height + 'px', overflowY: 'auto'});
        } else {
          tabPanes.css({maxHeight: '', overflowY: ''});
        }
      }

      scope.$on('attrChange', function(e, values) {
        setAnim(values[0]);
        setScrollable(values[1], values[2]);
      });

      setAnim(tabsCtrl.animated);
      setScrollable(tabsCtrl.scrollable);
    },
    template: '<div class="tab-pane fade" ng-class="{fade: anim, in: selected, hidden: !anim && !selected}" ng-transclude></div>'
  };
}])
.directive('syTabLink', [function() {
  return {
    require: '^syTabs',
    restrict: 'E',
    scope: {
      pane: '@'
    },
    link: function(scope, ele, attr, tabsCtrl) {
      (angular.isUndefined(scope.pane)) ? scope.pane = 0 : scope.pane = parseInt(scope.pane);
      scope.$on('panesChange', function(e, val) {
        scope.panes = val;
      });
      scope.select = tabsCtrl.select;
    },
    template: '<a href ng-click="select(panes[pane])">{{panes[pane].title}}</a>'
  };
}]);