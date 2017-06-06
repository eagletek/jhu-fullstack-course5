(function(){
angular.module("LunchCheckerApp", [])
.controller("LunchCheckController", LunchCheckController)

LunchCheckController.$inject = ["$scope", "$filter"];

function LunchCheckController($scope, $filter){
  $scope.lunch_menu = "";
  $scope.validation_class = "";
  $scope.output_message = "";
  $scope.validateLunchSize = function(){
    var food_items = $scope.lunch_menu.split(",")
    food_items = food_items.map(trimString);
    food_items = food_items.filter(function(item){
      return item.length > 0;
    });

    // TODO: Calculate correct output messages
    switch (food_items.length) {
      case 0:
        $scope.output_message = "Please enter data first!";
        $scope.validation_class = "has-error";
        break;
      case 1:
      case 2:
      case 3:
        $scope.output_message = "Enjoy!";
        $scope.validation_class = "has-success";
        break;
      default:
        $scope.output_message = "Too much!";
        $scope.validation_class = "has-success";
        break;
    }
  };
};

function trimString(str){return str.trim()}

})()
