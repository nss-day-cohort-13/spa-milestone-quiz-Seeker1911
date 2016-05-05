// GLOBAL VARIABLE 'CarLot'
//
// augment global variable 2 times in seperate files.with IIFEs. one each.
// augment other IIFE file with function that creates all event handlers.
// named activateEvents.
// The final IIFE should augment the object with two more functions. One function resets the border thickness and background
// color for each car element back to the original values. The other function changes the thickness of the border of a car element,
// and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.
function populatePage (inventory) {
  // Loop over the inventory and populate the page
  // Build HTML string to populate cards.
  // Now that the DOM is loaded, establish all the event listeners needed
     CarLot.activateEvents();
  //
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
 CarLot.loadInventory();

 //Use Bootstrap to create rows. Each row contains 3 columns. Parent element of class container.
 //
/*on element click, clear value of text input and place cursor into text input*/
//description of car must update dynamically when typing into input. 'keyup?'
