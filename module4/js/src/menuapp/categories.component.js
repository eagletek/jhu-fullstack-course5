(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  restrict: 'E',
  templateUrl: 'js/src/menuapp/templates/categories.template.html',
  bindings: {
    categories: '<',
    selected: '<?'
  }
});

})();
