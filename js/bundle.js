(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// All event listeners
var inventoryDataUpdate = require('./inventoryDataUpdate');

// Call event listeners in event function
function events() {
  inventoryDataUpdate();
}

// Export events
module.exports = events;
},{"./inventoryDataUpdate":2}],2:[function(require,module,exports){
var rewriteAllProducts = require('../ReadWrite/rewriteAllProducts');

// Listens for any change to inventory data
function inventoryDataUpdate() {

  // Create firebase reference
  firebase.database().ref('inventory/').on('value', function(inventory) {
    // When a value changes, rewrite DOM
    rewriteAllProducts(inventory.val());
  });

}

// Export inventoryDataUpdate
module.exports = inventoryDataUpdate;
},{"../ReadWrite/rewriteAllProducts":3}],3:[function(require,module,exports){
var writeProductToDOM = require('./writeProductToDOM');

// Rewrites all product to the DOM
var rewriteAllProducts = function(products) {

  // Clear DOM
  $('#contentContainer').html("");

  // Loop through products, adding each one to DOM
  for (var key in products) {
      // Get current product
      var currentProduct = products[key];
     
      // Write currentProduct to DOM
      writeProductToDOM(currentProduct);
  }

}

// Export rewriteAllProducts
module.exports = rewriteAllProducts;
},{"./writeProductToDOM":4}],4:[function(require,module,exports){
// Writes a product to the DOM
var writeProductToDOM = function(product) {

  // Build up productCard
  var productCard = $('<div class="productCard"></div>'); 
  var productBarcode = $('<p class="productBarcode"></p>').text("Barcode: " + product.barcode);
  var productQuantity = $('<p class="productQuantity"></p>').text("Quantity: " + product.quantity);

  // Add information to productCard
  productCard.append(productBarcode);
  productCard.append(productQuantity);

  // Write productCard to DOM
  $('#contentContainer').prepend(productCard);

}

// Export writeProductToDOM
module.exports = writeProductToDOM;
},{}],5:[function(require,module,exports){
"use strict";

// Add all event listeners
var events = require('./Events/events');
events();


},{"./Events/events":1}]},{},[5]);
