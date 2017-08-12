(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['categories', '$rootScope']
function MenuCategoriesController(categories, $rootScope) {
  var menu = this;
  menu.categories = categories;
  var cancellers = [];

  menu.$onInit = function() {
    var cancel = $rootScope.$on('$stateChangeError',
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

  menu.$onDestroy = function() {
    cancellers.forEach(function(cancel){
      cancel();
    });
  };
};

})();
