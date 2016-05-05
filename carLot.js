//
// GLOBAL VARIABLE 'CarLot'
// augment global variable 2 times in seperate files. with IIFEs. one each.
//loadInventory, loads json, stores in private variable. expose getter to read array 
//of cars with getInventory.
//load json file and parse into native object.
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },
   loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

   inventoryLoader.addEventListener("load", function () {

      });
    }
  };
})();
