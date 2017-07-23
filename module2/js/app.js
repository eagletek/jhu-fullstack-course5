(function(){
angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.list = ShoppingListCheckOffService.getToBuyList();
  toBuy.buy = function(index){
    ShoppingListCheckOffService.buy(index);
  }
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.list = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  service.toBuyList = [
    {name: "bread", quantity: 1},
    {name: "cheeses", quantity: 2},
    {name: "chips", quantity: 3},
    {name: "meats", quantity: 4},
    {name: "cookies", quantity: 5}
  ];

  service.boughtList = [];

  service.getToBuyList = function () {
    return service.toBuyList;
  }
  service.getBoughtList = function () {
    return service.boughtList;
  }
  service.buy = function(index) {
    var item = service.toBuyList.splice(index, 1)[0];
    service.boughtList.push(item);
  }
}
})()
