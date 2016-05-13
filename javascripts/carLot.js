var Carlot = (function(car) {

	var inventory = [];

	function CarObj(item, id) {
		this.item = item;
		this.id = id;
	}

	car.loadInventory = function(newCar) {
		var requestData = new XMLHttpRequest();
		requestData.addEventListener("load", function () {
			var data = JSON.parse(this.responseText);
			for (var i = 0; i < data.cars.length; i++) {
				newCar = new CarObj(data.cars[i], `car${i}`);
				inventory.push(newCar);
			}
		Carlot.populatePage(inventory);
		});
		requestData.open("GET", "inventory.json");
		requestData.send();
	};

	car.getInventory = function() {
		return inventory;
	};

	car.editInventory = function(editedItem) {
		editedItem.item.description = textInput.value;
		editedItem.item.purchased = checkPurchased.checked.toString();
		Carlot.populatePage(inventory);
	}

	return car;

}(Carlot || {}));
