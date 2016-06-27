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