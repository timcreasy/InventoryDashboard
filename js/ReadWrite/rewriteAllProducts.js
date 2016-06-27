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