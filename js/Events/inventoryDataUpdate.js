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