(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'js/src/menuapp/templates/home.template.html'
  })

  // Menu Categories page
  .state('menuCategories', {
    url: '/menu/categories',
    templateUrl: 'js/src/menuapp/templates/menu-categories.template.html',
    controller: 'MenuCategoriesController as menu',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response){
          return response.data;
        });
      }]
    }
  })

  .state('category', {
    url: '/menu/categories/{shortName}',
    templateUrl: 'js/src/menuapp/templates/category.template.html',
    controller: "CategoryController as menu",
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(response){
          return response.data;
        });
      }],
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response){
          return response.data;
        });
      }]
    }
  });

}

})();
