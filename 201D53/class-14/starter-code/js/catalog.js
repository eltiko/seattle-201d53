/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product 0000000000000
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var newOption = document.createElement('option')
    newOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(newOption);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  var itemSubmit = event.target.items.value;
  var quantitySubmit = event.target.quantity.value;
  // new CartItem(itemSubmit,quantitySubmit);
  // newCart.items();
    cart.addItem(itemSubmit,quantitySubmit);
  // TODO: Prevent the page from reloading  00000000000
  
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(productName) {

  // localStorage.getItem('newCartItem');
  var stringifyNewCartItem = localStorage.getItem('newCartItem');
  var parsedNewCartItem = JSON.parse(stringifyNewCartItem);
  for( var i = 0; i < parsedNewCartItem.length; i++){
    parsedNewCartItem[i].prod

  }
  // TODO: suss out the item picked from the select list from the product list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var productYouFound = Product.allProducts[0].name;

  var quantity = Product.allProducts[0].quantity;

  cart.addItem(productYouFound,quantity);

}
 
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
