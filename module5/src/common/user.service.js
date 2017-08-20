(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;
  service.user = null;
  // service.user = {
  //   firstName: "Josh",
  //   lastName: "OConnell",
  //   email: "me@home.com",
  //   phone: "555-555-5555",
  //   favDish: {
  //     id: 193,
  //     short_name: "L1",
  //     name: "Orange Chicken",
  //     description: "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
  //     price_small: null,
  //     price_large: 9.75,
  //     small_portion_name: null,
  //     large_portion_name: null,
  //     created_at: "2017-08-16T00:47:48.140Z",
  //     updated_at: "2017-08-16T00:47:48.140Z",
  //     category_short_name: "L",
  //     image_present: true
  //   }
  // };

  service.saveUserData = function(firstName, lastName, email, phone, favDish){
    service.user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      favDish: favDish
    };
  };
}

})();
