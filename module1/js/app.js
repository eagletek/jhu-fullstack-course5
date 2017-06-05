(function(){
angular.module("LunchCheckerApp", [])
.controller("LunchCheckController", lunchCheck )

LunchCheckController.$inject = ["$scope", "$filter"];

function lunchCheck($scope, $filter){
  $scope.lunch_menu = "";
  $scope.output_message = "";
  $scope.validateLunchSize = function(){
    var food_items = $scope.lunch_menu.split(",")
    food_items = food_items.map(trimString);
    food_items = food_items.filter(function(item){
      return item.length > 0;
    });

    // TODO: Calculate correct output messages
    $scope.output_message = food_items.length;
  };
};

function trimString(str){return str.trim()}

})()
