(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.userData = {};

  $ctrl.doSignUp = function() {
    MenuService.getMenuItem($ctrl.userData.dishShortName).then(function(menuItem){
      var favDish = menuItem;
      UserService.saveUserData($ctrl.userData.firstName,
        $ctrl.userData.lastName,
        $ctrl.userData.email,
        $ctrl.userData.phone,
        favDish);
      $ctrl.success = true;
    })
    .catch(function(error) {
      $ctrl.favDishError = "No such menu number exists."
    });
  };
}

})();
