(function(){
angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItems);

NarrowItDownController.$inject = ["MenuSearchService"]
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.getMatchedMenuItems = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function(data){
      narrow.found = data;
      console.log(narrow.found);
    })
    .catch(function(error) {
      console.log("Something went wrong...");
    });
  };
};

MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    console.log("Searching for " + searchTerm);
    var endpoint="https://davids-restaurant.herokuapp.com/menu_items.json"
    return $http({
      method: "GET",
      url: endpoint
    }).then(function (result) {
      return result.data.menu_items.filter(item => item.description.includes(searchTerm));
    });
  };
};

function FoundItems() {
  var ddo = {
    scope: {
      foundItems: '=',
      templateUrl: ''
    }
  };
  return ddo;
};

})();
