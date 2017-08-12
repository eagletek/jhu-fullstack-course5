(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  restrict: 'E',
  templateUrl: 'js/src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
