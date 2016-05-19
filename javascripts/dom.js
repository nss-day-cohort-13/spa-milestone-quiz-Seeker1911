var Carlot = (function(car) {

  car.populatePage = function(inventory) {
    var populater = "";
    inventory.forEach(function(car) {
      populater += `<div style="border-color:${car.item.color}" id="${car.id}" class="card column col-lg-3 col-md-5 col-sm-5 col-xs-12">` +
        `<h2>${car.item.make} ${car.item.model}</h2>` +
          `<div style="border-color:${car.item.color}">` +
            `<p>Year: ${car.item.year}</p>` +
              `<p>Price: $${car.item.price}</p>` +
                `<p class="text-capitalize">Color: ${car.item.color}</p>` +
                  `<p class="text-justify description"> ${car.item.description}</p>` +
                    `<p>Availability</p>`
                    if (car.item.purchased) {
                      populater += `<p class="outOfStock">Out of stock </p>`;
                    } else {
                      populater += `<p class="available">Available</p>`;
                    }
                    populater += `</div>` +
                      `</div>` +
                        `<div class="column col-lg-1 col-md-1 col-sm-1"></div>`;
    });
    outputDiv.innerHTML = populater;
    Carlot.activateEvents();
  };

  car.activateEvents = function() {
    var cards = Array.from(document.getElementsByClassName("card"));
    cards.forEach(function(card) {
      card.addEventListener("click", function(click) {
        if (edit === false) {
          edit = true;
          var element = document.getElementById(this.id);
          Carlot.cardFocus(element);
        } else {
          return;
        }
      });
    });
  };

 return car;

}(Carlot || {}));
