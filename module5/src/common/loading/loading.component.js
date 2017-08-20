(function() {
"use strict";

angular.module('common')
.component('loading', {
  template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
  controller: LoadingController
});


LoadingController.$inject = ['$rootScope'];
function LoadingController ($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function() {
    $ctrl.show = false;
    var cancel = $rootScope.$on('spinner:activate', onSpinnerActivate);
    cancellers.push(cancel);
    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("Event:" + event);
      console.log("toState: " + toState);
      console.log("toParams: " + toParams);
      console.log("fromState: " + fromState);
      console.log("fromParams: " + fromParams);
      console.log("error: " + error);
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function() {
    cancellers.forEach(function(cancel){
      cancel();
    });
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }
}

})();
