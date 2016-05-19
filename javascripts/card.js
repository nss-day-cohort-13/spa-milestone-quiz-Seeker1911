var Carlot = (function(car) {
  var editor;
  var currentInventory;

	car.cardFocus = function (element) {
		textInput.removeAttribute("disabled", "true");
		textInput.focus("true");
		checkPurchased.removeAttribute("disabled", "true");
		element.classList.add("card-focus");
		labelPurchased.classList.remove("disabled");
		editor = element;
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
  	})
  }
  car.cardFocusOff = function(event) {
    event.preventDefault();
    Carlot.editInventory(currentInventory);
    editor.classList.remove("card-focus");
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
