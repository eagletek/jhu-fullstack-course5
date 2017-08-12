(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['items', 'categories']
function CategoryController(items, categories) {
  var menu = this;
  menu.items = items;
  menu.categories = categories;
};

})();
