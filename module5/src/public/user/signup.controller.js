function () {
"use strict";

angular.module('public')
.controller('SignUpController', UserInfoController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = UserService.user;
  $ctrl.doSignUp = function() {

    var favDish = MenuService.getMenuItem(item_short_name);
    if favDish {
      UserService.saveUserData(firstName, lastName, email, phone, favDish);
    }
    else {
      // Display error for favorite dish selection
    }
  };
}

})();
