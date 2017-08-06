(function(){
angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);

NarrowItDownController.$inject = ["MenuSearchService"]
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.found = [];

  narrow.getMatchedMenuItems = function(searchTerm) {
    narrow.found = [];
    if (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(data){
        narrow.found = data;
        console.log(narrow.found);
      })
      .catch(function(error) {
        console.log("Something went wrong...");
      });
      narrow.searchClicked = true;
    }
    else {
      narrow.searchClicked = true;
    }
  };

  narrow.removeItem = function(index) {
    narrow.found.splice(index,1);
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

function FoundItemsDirective() {
  var ddo = {
    scope: {
      items: '<foundItems',
      searchClicked: '<',
      removeItem: '&onRemove'
    },
    restrict: 'E',
    templateUrl: 'menu_items.template.html',
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
};

function FoundItemsDirectiveController() {
};

})();
