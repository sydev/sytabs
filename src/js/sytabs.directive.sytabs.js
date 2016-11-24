(function() {
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
      controller: ['$scope', function($scope) {
        let self = this,
          panes = self.panes = $scope.panes = [];

        $scope.$watchGroup(['animated', 'scrollable', 'scrollableHeight'], (newValue, oldValue) => {
	        $scope.$broadcast('attrChange', newValue);
	      });

        $scope.$watch('panes', (newValue, oldValue) => {
	        $scope.$broadcast('panesChange', newValue);
	      });

        self.animated          = $scope.animated;
	      self.scrollable        = $scope.scrollable;
	      self.scrollableHeight  = $scope.scrollableHeight;

        $scope.select = this.select = (pane) => {
	        angular.forEach(panes, (_pane) => _pane.selected = (_pane == pane) ? true : false);
	      };

        this.addPane = (pane) => {
	        if (panes.length === 0) $scope.select(pane);
	        panes.push(pane);
	      };


      }],
      template: `<div class="tabbable">
        <ul class="nav nav-tabs" data-ng-class="{'nav-justified': justifed}">
          <li ng-repeat="pane in panes" data-ng-class="{active: pane.selected}">
            <a href="javascript:void(0)" data-ng-click="select(pane)">
              {{pane.title}}
              <span data-ng-if="pane.icon" data-ng-class="pane.icon"></span>
            </a>
          </li>
        </ul>
      <div class="tab-content" data-ng-transclude></div>
    </div>`
    };
  };

})();
