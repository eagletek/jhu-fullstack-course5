(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath){
  var menu = this;

  menu.getAllCategories = function(){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });
    return response;
  };

  menu.getItemsForCategory = function(categoryShortName){
    console.log("Getting items for category: " + categoryShortName)
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  };
}

})();
