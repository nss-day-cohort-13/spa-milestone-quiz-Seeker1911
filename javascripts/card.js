var Carlot = (function(car) {
  var editor;

	car.cardFocus = function (element) {
		textInput.removeAttribute("disabled", "true");
		textInput.focus("true");
		checkPurchased.removeAttribute("disabled", "true");
		element.classList.add("card-focus");
		// var edit = element.querySelector("");
		// edit.removeAttribute("style");
		// edit.classList.add("cardFocus");
		labelPurchased.classList.remove("disabled");
		editor = element;
		// currentList = edit;
		Carlot.cardEdit();
	};

	car.cardEdit = function () {
		var inventory = Carlot.getInventory();
		currentInventory = inventory.find(function(car) {
			return car.id === editor.id;
		});
		var newDescription = editor.querySelector(".description");
		textInput.addEventListener("keyup", function() {
			newDescription.innerText = textInput.value;
		//	currentInventory.item.purchased = checkPurchased.checked;

		// if (currentInventory.item.purchased === "true") {
		// 	checkPurchased.checked = true;
		// } else if (currentInventory.item.purchased === "false") {
		// 	checkPurchased.checked = false;
		// }
	})

		var boughtCar = document.getElementById('purchased');
    boughtCar.addEventListener('change', function(event){
			if (boughtCar.checked) {
        editor.lastElementChild.innerHTML = "<p id='outOfStock' >Out of Stock</p>";
        var stock = editor.querySelector('#outOfStock').innerHTML;
        document.getElementById('outOfStock').innerHTML = stock;
      }
		})
  }
	car.cardFocusOff = function(event) {
		event.preventDefault();
		Carlot.editInventory(currentInventory);
		editor.classList.remove("card-focus");
		// currentList.classList.remove("cardFocus");
		textInput.removeAttribute("disabled", "false");
		textInput.setAttribute("disabled", "true");
		textInput.value = "";
		checkPurchased.setAttribute("disabled", "true")
		checkPurchased.checked = false;
		labelPurchased.classList.add("disabled");
		edit = false;
	}

	return car;

}(Carlot || {}));
